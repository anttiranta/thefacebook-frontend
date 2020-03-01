// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// App Imports
import {
    create,
    update
} from '../../redux/actions'
import mediaGalleryRoutes from '../../../../setup/routes/media_gallery'
import { fileToBase64 } from '../../helper/file'
import { setError, setNotice, setSuccess } from '../../../common/component/notification/actions'
import { renderIf } from '../../../../utils/elementUtils'

const Form = (props) => {
    let { mediaGalleryEntry, setMediaGalleryEntry, isLoading, setIsLoading, changePreviewImage } = props
    const isEditMode = props.isEditMode || false

    const renderIsRequiredField = () => {
        return <span style={{ color: 'red' }}>*</span>
    }

    const onChangeField = (event) => {
        setMediaGalleryEntry({ ...mediaGalleryEntry, [event.target.name]: event.target.value })
    }

    const onChangeImage = (event) => {
        const file = event.target.files[0];

        if (file) {
            changePreviewImage(file)

            props.setNotice('Encoding file, please wait...')
            setIsLoading(true)

            // Base 64 encode the file
            fileToBase64(file).then(result => {
                setMediaGalleryEntry({
                    ...mediaGalleryEntry,
                    content: { ...mediaGalleryEntry.content, base64EncodedData: result, name: file.name, mimeType: file.type }
                })
                
                setIsLoading(false)
            }).catch(error => {
                props.setError('There was some error. Please try again.')
                setIsLoading(false)
            })
        }
    }

    const validate = () => {
        if (!mediaGalleryEntry.label || mediaGalleryEntry.label === '') {
            throw new Error('You did not fill all of the required fields.')
        }
        if (!mediaGalleryEntry.content.name || !mediaGalleryEntry.content.mimeType
            || !mediaGalleryEntry.content.base64EncodedData) {
            throw new Error('Image content is invalid. Please try to select image again.')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            validate()

            setIsLoading(true)
            props.setNotice('Saving photo, please wait...')

            let savedEntry = null
            if (mediaGalleryEntry.id) {
                savedEntry = await props.update({
                    id: mediaGalleryEntry.id,
                    userId: mediaGalleryEntry.user.id,
                    label: mediaGalleryEntry.label
                })
            } else {
                // Make sure there won't be id field
                savedEntry = await props.create({
                    label: mediaGalleryEntry.label, 
                    userId: mediaGalleryEntry.user.id,
                    content: { ...mediaGalleryEntry.content }
                })
            }

            setIsLoading(false)
            props.setSuccess('Photo saved successfully.')

            props.history.push(mediaGalleryRoutes.mediaGalleryEntry.path(savedEntry.id))
        } catch (exception) {
            props.setError(exception.message)
            setIsLoading(false)
        }
    }

    const handleCancel = (event) => {
        event.preventDefault()
        props.history.goBack()
    }

    return (
        <div id="terms_boxes">
            <div style={{ backgroundColor: "#4C70A0", color: "white" }}>Content</div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
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
                        {renderIf(!isEditMode, () => (
                            <tr>
                                <td>Image: {renderIsRequiredField()}</td>
                                <td>
                                    <input
                                        name="content"
                                        type="file"
                                        onChange={onChangeImage}
                                        required={mediaGalleryEntry.id === 0}
                                    />
                                </td>
                        </tr>
                        ))}                      
                    </tbody>
                </table>

                {/* Form buttons */}
                <div id="fb_button" style={{ marginLeft: '150px' }}>
                    <input
                        type="submit"
                        name="submit"
                        disabled={isLoading}
                        value="Save"
                    />
                    <button disabled={isLoading} onClick={handleCancel} style={{ marginLeft: '5px' }} >Cancel</button>
                </div>
            </form>
        </div>
    )
}

// Component Properties
Form.propTypes = {
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired,
    mediaGalleryEntry: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setMediaGalleryEntry: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    changePreviewImage: PropTypes.func.isRequired,
    isEditMode: PropTypes.bool,
}

export default withRouter(connect(null, {
    create,
    update,
    setError,
    setNotice,
    setSuccess
})(Form));