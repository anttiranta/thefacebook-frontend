// Imports
import React from 'react'
import { Link} from 'react-router-dom'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'

const Footer = () => {
    // TODO: make links clicked?

    const padding = {padding: 5}

    return (
        <div id="footer">
            <p>
                <>
                    <Link to={pagesRoutes.aboutUs.path} style={padding}>about</Link>
                    <Link to={pagesRoutes.contact.path} style={padding}>contact</Link>
                    <Link to={pagesRoutes.faq.path} style={padding}>faq</Link>
                    <Link to={pagesRoutes.terms.path} style={padding}>terms</Link>
                    <Link to={pagesRoutes.privacy.path} style={padding}>privacy</Link>
                </><br />
                a Antti Ranta production<br />
                Thefacebook &copy; {new Date().getFullYear()}
            </p>
        </div>
      )
}

export default Footer;