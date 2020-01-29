// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

const Reset = () => {
    return (
        <div id="login_page_box">
            <Helmet>
                <title>Reset Password - Thefacebook</title>
            </Helmet>

            <div style={{backgroundColor: '#4C70A0', color: 'white'}}>Reset Password </div>
            <h1 style={{textAlign: 'center'}}>[ Reset Password ] </h1>

            <form>
                <table>
                    <tbody>
                        <tr>
                            <td style={{width: '60px'}}>Email: </td>
                            <td><input type="text" name="email" /></td>
                        </tr>
                    </tbody>
                </table>
                <table id="login_page_links">
                    <tbody>
                        <tr>
                            <td style={{textAlign: 'center', paddingRight: '5px'}}>
                                <div id="fb_button">
                                    <input type="submit" name="reset" value="Reset" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
      )
}

export default Reset;