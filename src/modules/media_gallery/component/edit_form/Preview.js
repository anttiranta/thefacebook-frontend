// Imports
import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import { renderIf } from '../../../../utils/elementUtils'

const Preview = (props) => {
    let { mediaGalleryEntry, previewImage } = props

    return (
        renderIf(mediaGalleryEntry.label !== '' && previewImage !== '', () => (
            <div id="terms_boxes">
                <div style={{ backgroundColor: "#4C70A0", color: "white" }}>Preview</div>

                {/* Label preview */}
                <h1 style={{ textAlign: 'center' }}>[ {mediaGalleryEntry.label} ]</h1>

                {/* Photo preview */}
                <div style={{ textAlign: 'center' }}>
                    <img src={previewImage} alt="Photo preview"
                        style={{ maxWidth: 600, marginTop: '1em' }} />
                </div>
                <br />
            </div>
        ))
    )
}

// Component Properties
Preview.propTypes = {
    mediaGalleryEntry: PropTypes.object.isRequired,
    previewImage: PropTypes.string.isRequired, 
}

export default Preview;