// Imports
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// App Imports
import userRoutes from '../../../setup/routes/user'
import { setError, setSuccess } from '../../common/component/notification/actions'
import { register } from '../actions/me'
import AuthCheck from '../../auth/component/AuthCheck'
import { isValidEmail } from '../helper/validation'

const Register = (props) => {

    const validate = (fields) => {
        if (!fields.account || !fields.email || !fields.name || !fields.status 
            || !fields.password || !fields.password2 || !fields.terms) {
            throw new Error('You did not complete all of the required fields')
        }
        if (fields.password !== fields.password2) {
            throw new Error('Your passwords did not match.')
        }
        if (!isValidEmail(fields.email)) {
            throw new Error('You must have a valid and email address to register for an account.')
        }
    }

    const handleRegister = async (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const name = event.target.name.value
        const status = event.target.status.value
        const password = event.target.pass.value
        const password2 = event.target.pass2.value
        const terms = event.target.terms.checked
        const account = event.target.account.value

        try {
            validate({account, email, name, status, password, password2, terms})

            register(
                {user: {username: account, email, name, status}, password}
            )

            props.setSuccess('Thank you, you have registered - you may now login.') 
            props.history.push(userRoutes.login.path) 
        } catch (exception) {
            props.setError(exception.message) // TODO: better message printing
        }
    }

    return (
        <div id="register_box">
            <AuthCheck />

            <div style={{backgroundColor: '#4C70A0', color: 'white'}}>Registration</div>
            <h1 style={{textAlign: 'center'}}>[ Register ]</h1>

            <p style={{margin: 'auto', width: '90%'}}>
                To register for thefacebook.com, just fill in the four fields below. You will have a chance to enter additional information and submit a picture once you have registered.
            </p>

            {/* Register Form */}
            <form onSubmit={handleRegister} name="registerForm">
                <table>
                    <tbody>
                        <tr>
                            <td>Profile Name </td>
                            <td><input type="text" name="account" /></td>
                        </tr>
                        <tr>
                            <td>Name </td>
                            <td><input type="text" name="name" /></td>
                        </tr>
                        <tr>
                            <td>Status </td>
                            <td>
                                <select name="status">
                                    <option></option>
                                    <option value="Student">Student</option>
                                    <option value="Alumnus">Alumnus/Alumna</option>
                                    <option value="Faculty">Faculty</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Email: (CMU)</td>
                            <td><input type="text" name="email" /></td>
                        </tr>
                        <tr>
                            <td style={{width: '150px'}}>Password*: (not afs)</td>
                            <td><input type="password" name="pass" maxlegnth="10" /></td>
                        </tr>
                        <tr>
                            <td style={{width: '150px'}}>Confirm Password </td>
                            <td><input type="password" name="pass2" maxlegnth="10" /></td>
                        </tr>
                    </tbody>
                </table>

                <div id="register_box_info">
                    <p id="register_links" style={{textAlign: 'left'}}>
                        <input type="checkbox" name="terms" />I have read and understood the <a href="/terms">Terms of Use</a>, and I agree to them.
                    </p>
                    <p>
                        * You can choose any password. It does not have to be, and should not be, your AFS password.
                    </p>
                    <div id="fb_button" style={{textAlign: 'center'}}>
                        <input type="submit" name="submit" value="Register Now!" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(connect(null, {setError, setSuccess})(Register))