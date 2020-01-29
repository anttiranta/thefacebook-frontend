// Imports
import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'
import userRoutes from '../../../setup/routes/user'
import { logout } from '../../user/actions/me'

// Image Imports
import pacino2 from '../../../resources/images/pacino2.png'
import logo2 from '../../../resources/images/logo2.png'

const Header = (props) => {

    const handleLogout = () => {
        props.logout();
        props.history.push(pagesRoutes.home.path)
    };
    
    const padding = {padding: 5}

    return (
        <div id="header">
            <img src={pacino2} alt="pacino" />
            <div id="top_links" className="text_on_blue" style={!props.me.isAuthenticated ? {fontSize: '11px'} : {}}>
                <Link to="/" style={padding}><img src={logo2} alt="logo" /></Link>
                {
                    props.me.isAuthenticated
                        ?
                        <>
                            <Link to={pagesRoutes.home.path} style={padding}>home</Link>
                            <Link to={userRoutes.search.path} style={padding}>search</Link>
                            <Link to={pagesRoutes.construction.path} style={padding}>global</Link>
                            <Link to={pagesRoutes.construction.path} style={padding}>social net</Link>
                            <Link to={pagesRoutes.construction.path} style={padding}>invite</Link>
                            <span onClick={() => handleLogout()} style={{padding: 5, cursor: 'pointer' }} className={'fake_link'}>
                                logout
                            </span>
                        </>
                        : 
                        <>
                            <Link to={userRoutes.login.path} style={padding}>login</Link>
                            <Link to={userRoutes.register.path} style={padding}>register</Link>
                            <Link to={pagesRoutes.aboutUs.path} style={padding}>about</Link>
                            <Link to={pagesRoutes.faq.path} style={padding}>faq</Link>
                        </>
                }
            </div>
        </div>
      )
}

// Component State
function userState(state) {
    return {
      me: state.me
    }
}

export default withRouter(connect(userState, { logout })(Header))