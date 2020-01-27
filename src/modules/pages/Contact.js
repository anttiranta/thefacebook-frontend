// Imports
import React from 'react'

const Contact = () => {
    return (
        <div id="contact_box">
            <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>Contact Thefacebook</div>
            <h1 style={{ textAlign: 'center' }}>[ Contact ]</h1>

            <div id="contact_boxes">
                <div style={{ backgroundColor: "#4C70A0", color: "white" }}>Suggest a New School</div>
                <p>
                    Suggest a new school to be added to the facebook network. If you provide us with your email address, we will notify you when the school is added.
                </p>
                <form action="mailto:contact@thefacebook.com?subject=New School" method="post" encType="text/plain">
                    <table>
                        <tbody>
                            <tr>
                                <td>New School:
                                </td>
                                <td><input type="text" name="school" /></td>
                            </tr>
                            <tr>
                                <td>Email (optional):
                                </td>
                                <td><input type="text" name="email" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: "center" }}>
                                    <div id="fb_button"><input type="submit" value="Submit" name="submit" /></div>
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

            <div id="contact_boxes">
                <div style={{ backgroundColor: "#4C70A0", color: "white" }}>Email</div>
                <>
                    <table id="contact_links" style={{ marginBottom: "40px" }}>
                        <tbody>
                            <tr>
                                <td><b>Information/Support:</b>
                                </td>
                                <td><a href="mailto:info@thefacebook.com">info@thefacebook.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Suggestions/Requests</b>
                                </td>
                                <td>
                                    <a href="mailto:suggest@thefacebook.com">suggest@thefacebook.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Business Development:</b>
                                </td>
                                <td>
                                    <a href="mailto:business@thefacebook.com">business@thefacebook.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Press Inquiries:</b>
                                </td>
                                <td>
                                    <a href="mailto:press@thefacebook.com">press@thefacebook.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Advertising:</b>
                                </td>
                                <td>
                                    <a href="mailto:advertise@thefacebook.com">advertise@thefacebook.com</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            </div>
        </div>
    )
}

export default Contact;