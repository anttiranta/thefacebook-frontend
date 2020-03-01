// Imports
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// App Imports
import SidePanel from '../../common/component/SidePanel'
import Form from '../component/edit_form/Form'
import Preview from '../component/edit_form/Preview'
import Loading from '../../common/component/Loading'
import AuthUserCheck from '../../auth/component/AuthUserCheck'
import { fileToBase64WithDataUrlDeclaration } from '../helper/file'
import userMediaGalleryManagement from '../api/userMediaGalleryManagement'
import { setError, setNotice, setSuccess } from '../../common/component/notification/actions'
import { renderIf } from '../../../utils/elementUtils'
import {
    getBase64EncodedDataWithDataUrlDeclaration
} from '../helper/file'

const EditForm = (props) => {
    const prevProps = useRef(false)
    const [isLoading, setIsLoading] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [mediaGalleryEntry, setMediaGalleryEntry] = useState({
        user: { id: props.me.details.id },
        id: 0,
        label: '',
        content: {
            base64EncodedData: '',
            mimeType: '',
            name: ''
        }
    })

    useEffect(() => {
        const getMediaGalleryEntry = async (entryId) => {
            try {
                const response = await userMediaGalleryManagement.getById(entryId);
                let errors = response.data.errors

                if (response.status === 200) {
                    if (errors && errors.length > 0) {
                        props.setError(errors[0].message)
                        return
                    }

                    const data = response.data.data.getUserGalleryEntry
                    
                    setMediaGalleryEntry(data)
                    setPreviewImage(getBase64EncodedDataWithDataUrlDeclaration(data.content))
                }
            } catch (exception) {
                props.setError('There was some error fetching the data. Please try again.')
            }
        }

        if (!prevProps.current || prevProps.current.location.pathname !== props.location.pathname) {
            if (props.match.params.id) {
                // Get media gallery entry details (if edit)
                getMediaGalleryEntry(props.match.params.id)
            }
        }
        prevProps.current = props
    }, [props, setMediaGalleryEntry, setPreviewImage])

    const changePreviewImage = (file) => {
        fileToBase64WithDataUrlDeclaration(file).then(result => {
            setPreviewImage(result)
        })
    }

    const isNewEntry = () => {
        return props.match.params.id === undefined
    }

    const getPageTitle = () => {
        return (isNewEntry() ? 'Add' : 'Edit') + ' Photo'
    }

    const renderPage = () => {
        return (
            <>
                {/* SEO */}
                <Helmet>
                    <title>{`${getPageTitle()} - Thefacebook`}</title>
                </Helmet>

                {/* Side panel */}
                <SidePanel />

                <div id="terms_box">
                    <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>{getPageTitle()}</div><br />

                    {/* Form container */}
                    <Form
                        mediaGalleryEntry={mediaGalleryEntry}
                        isLoading={isLoading}
                        setMediaGalleryEntry={setMediaGalleryEntry}
                        setIsLoading={setIsLoading}
                        changePreviewImage={changePreviewImage}
                        isEditMode={!isNewEntry()}
                    />

                    {/* Preview container */}
                    <Preview
                        mediaGalleryEntry={mediaGalleryEntry}
                        previewImage={previewImage}
                    />
                </div>
            </>
        )
    }

    return (
        <div id="content">
            {
                !isNewEntry()
                    ? mediaGalleryEntry.id === 0
                        ? <Loading />
                        : renderIf(mediaGalleryEntry.id !== 0, () => (
                            <>
                                <AuthUserCheck expectedUserId={mediaGalleryEntry.user.id} />
                                {renderPage()}
                            </>
                        ))
                    : renderPage()
            }
        </div>
    )
}

// Component Properties
EditForm.propTypes = {
    me: PropTypes.object.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired,
}

// Component State
function editFormStates(state) {
    return {
        me: state.me
    }
}

export default connect(editFormStates, {
    setError,
    setNotice,
    setSuccess
})(EditForm);