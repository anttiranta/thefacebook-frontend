// Imports
import React from 'react'
import { Link} from 'react-router-dom'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'

const Footer = () => {
    // TODO: fix links
    // TODO 2: make links clicked?

    const padding = {padding: 5}

    return (
        <div id="footer">
            <p>
                <>
                    <a href={pagesRoutes.aboutUs.path} style={padding}>about</a>
                    <Link to={pagesRoutes.contact.path} style={padding}>contact</Link>
                    <a href={pagesRoutes.faq.path} style={padding}>faq</a>
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