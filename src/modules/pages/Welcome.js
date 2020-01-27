// Imports
import React from 'react'

// App Imports
import AuthCheck from '../auth/component/AuthCheck'
import userRoutes from '../../setup/routes/user'

const Welcome = () => {
    return (
        <div id="welcome_box">
            <AuthCheck />
            
            <div style={{backgroundColor: "#4C70A0", color: "white"}}>Welcome to Thefacebook</div>
            <h1 style={{textAlign: 'center'}}>[ Welcome to Thefacebook ]</h1>
            <p>Thefacebook is an online directory that connects people through social networks at college</p>
            <p>We have opened up Thefacebook for popular consumption at <b>Carnegie Mellon University </b></p>
            <p>You can use Thefacebook to:</p>
            <ul>
                <li>Search for people at your school</li>
                <li>Find out who are in your classes</li>
                <li>Look up your friends' friends</li>
                <li>See a visualization of your social network</li>
            </ul>
            <p>To get started, click below to register. If you have already registered, you can log in.</p>
            <div style={{textAlign: 'center'}} id="fb_button">
                <a href={userRoutes.register.path}>Register</a>
                &nbsp; &nbsp; 
                <a href={userRoutes.login.path}>Login</a>
            </div>
            <br />
        </div>
      )
}

export default Welcome;