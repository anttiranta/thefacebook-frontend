// Imports
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'

// App Imports
import SidePanel from '../../common/component/SidePanel'
import { renderIf } from '../../../utils/elementUtils'
import {
    //createOrUpdate,
    getById as getMediaGalleryEntryById
} from '../redux/actions'
import mediaGalleryRoutes from '../../../setup/routes/media_gallery'
import { routeImage } from '../../../setup/routes'
import { setError, setNotice, setSuccess } from '../../common/component/notification/actions'

const EditForm = (props) => {
    const prevProps = useRef(false)
    const [isLoading, setIsLoading] = useState(false)
    const [mediaGalleryEntry, setMediaGalleryEntry] = useState(
        {
            id: 0,
            label: null,
            content: null,
            image: null
        }
    )

    useEffect(() => {
        const getMediaGalleryEntry = (entryId) => {
            if (entryId > 0) {
                props.getMediaGalleryEntryById(entryId)
                    .then(response => {
                        if (response.data.errors && response.data.errors.length > 0) {
                            props.setError(response.data.errors[0].message)
                        } else {
                            setMediaGalleryEntry(response.data.data.getUserGalleryEntry)
                        }
                    })
                    .catch(error => {
                        props.setError('There was some error fetching the data. Please try again.')
                    })
            }
        }

        if (!prevProps.current || prevProps.current.location.pathname !== props.location.pathname) {
            if (props.match.params.id) {
                // Get media gallery entry details (if edit)
                getMediaGalleryEntry(parseInt(props.match.params.id))
            }
        }
        prevProps.current = props
    }, [props])

    const onChangeField = (event) => {
        mediaGalleryEntry[event.target.name] = event.target.value
    }

    const getPageTitle = () => {
        return (props.match.params.id === undefined ? 'Create' : 'Edit') + ' Photo'
    }

    const renderIsRequiredField = () => {
        return <span style={{ color: 'red' }}>*</span>
    }

    const validate = () => {
        if (!mediaGalleryEntry.label || mediaGalleryEntry.label === '') {
          throw new Error('You did not fill all of the required fields.')
        }
        // TODO: if new, validate content
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            validate()

            setIsLoading(true)
            props.setNotice('Saving photo, please wait...')

            // TODO: base64encode the image content - need to find library for this?
            // TODO: save photo to gallery

            setIsLoading(false)
            props.setSuccess('Photo saved successfully.')

            props.history.push(mediaGalleryRoutes.mediaGalleryEntry.path(1 /* TODO: id here */))
        } catch (exception) {
            props.setError(exception.message)
            setIsLoading(false)
        }
    }

    return (
        <div id="content">
            {/* SEO */}
            <Helmet>
                <title>{`${getPageTitle()} - Thefacebook`}</title>
            </Helmet>

            {/* Side panel */}
            <SidePanel />

            {/* Main container */}
            <div id="terms_box">
                <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>{getPageTitle()}</div><br />

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Label: {renderIsRequiredField()}</td>
                                <td>
                                    <input 
                                        type="text" 
                                        name="label" 
                                        value={mediaGalleryEntry.label} 
                                        onChange={onChangeField} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Select photo: {renderIsRequiredField()}</td>
                                <td>
                                    <input
                                        name="content" 
                                        type="file"
                                        onChange={onChangeField}
                                        required={mediaGalleryEntry.id === 0}
                                    />
                                </td>
                            </tr>

                            {/* Uploaded photo - TODO: is this needed? */}
                            {renderIf(mediaGalleryEntry.image !== null, () => (
                                <tr>
                                    <td>Uploaded photo: </td>
                                    <td>
                                        <img src={routeImage + mediaGalleryEntry.image} 
                                            alt="Photo" 
                                            style={{ maxWidth: 600, marginTop: '1em' }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Form submit */}
                    <div id="fb_button" style={{ textAlign: 'center' }}>
                        <input 
                            type="submit" 
                            name="submit" 
                            disabled={isLoading}
                            value="Save" 
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

// Component Properties
EditForm.propTypes = {
    // TODO: entry save function
    getMediaGalleryEntryById: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired,
}

export default withRouter(connect(null, {
    setError,
    setNotice,
    setSuccess,
    getMediaGalleryEntryById
})(EditForm));