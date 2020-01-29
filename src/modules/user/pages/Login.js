// Imports
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// App Imports
import { login } from '../redux/actions/me'
import userRoutes from '../../../setup/routes/user'
import { setError } from '../../common/component/notification/actions'
import AuthCheck from '../../auth/component/AuthCheck'
import { defaultIfUndefined } from '../../../utils/objectUtils'
import Loading from '../../common/component/Loading'

const Login = (props) => {

    const handleLogin = async (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.pass.value

        if (!username || !password) {
            props.setError('You did not fill in all required fields.')
            return
        }

        try {
            await props.login(username, password)

            props.history.push(userRoutes.profile.path(username))
        } catch (exception) {
            props.setError(exception.message) // TODO: better message printing
        }
    }

    const isLoading = defaultIfUndefined(props.me.isLoading, false)

    return (
        <div id="login_page_box">
            {
                isLoading
                    ? <Loading />
                    : <>
                        {/* Is user is already logged in */}
                        <AuthCheck />

                        {/* SEO */}
                        <Helmet>
                            <title>Login to your account - Thefacebook</title>
                        </Helmet>

                        <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>Thefacebook Login </div>
                        <h1 style={{ textAlign: 'center' }}>[ Login ] </h1>

                        {/* Login Form */}
                        <form onSubmit={handleLogin}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '60px' }}>Username: </td>
                                        <td><input type="text" name="username" /></td>
                                    </tr>
                                    <tr>
                                        <td>Password: </td>
                                        <td><input type="password" name="pass" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table id="login_page_links">
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center', paddingRight: '5px' }}>
                                            <div id="fb_button">
                                                <input type="submit" name="submit" value="Login" disabled={isLoading} />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'left', paddingLeft: '5px' }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <br />
                                            If you have forgotten your password, click <Link to="/reset">here</Link> to reset it.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </>
            }
        </div>
    )
}

// Component state
function loginState(state) {
    return {
        me: state.me
    }
}

export default withRouter(connect(loginState, { login, setError })(Login))