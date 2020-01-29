// Imports
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Image Imports
import MarkZuckerbergscard from '../../resources/images/Mark-Zuckerbergs-card.png'

// App imports
import pagesRoutes from '../../setup/routes/pages'

const AboutUs = () => {
    const newFbSite = "http://www.facebook.com/"

    return (
        <div id="about_us_box">
            <Helmet>
                <title>About Thefacebook</title>
            </Helmet>

            <div style={{backgroundColor: "#4C70A0", color: "white"}}>About Thefacebook</div>
            <h1 style={{textAlign: 'center'}}>[ About ]</h1>

            <div id="the_project_box">
            <div style={{backgroundColor: "#4C70A0", color: "white", marginBottom: "10px"}}>The Project</div>
            <p>
               Thefacebook is an online directory that connects people through social networks at colleges and universities.
            </p>
            </div>

            <div id="the_people_box">
                <div style={{backgroundColor: "#4C70A0", color: "white", marginBottom: "10px"}}>The People</div>
                <table>
                    <tbody>
                        <tr>
                            <td id="fb_link"><a href={newFbSite + "zuck"} style={{color: "#538ADC"}}>Mark Zuckerberg</a></td>
                            <td>Founder.</td>
                        </tr>
                        <tr>
                            <td id="fb_link"><a href={newFbSite + "dustin.moskovitzz.5"} style={{color: "#538ADC"}}>Dustin Moskovits</a></td>
                            <td>Destroyer.</td>
                        </tr>    
                        <tr>
                            <td id="fb_link"><a href={newFbSite + "saverin"} style={{color: "#538ADC"}}>Eduardo Saverin</a></td>
                            <td>Brazilian.</td>
                        </tr>
                        <tr>
                            <td id="fb_link"><a href={newFbSite + "andrew.mccollum1"} style={{color: "#538ADC"}}>Andrew McCollum</a></td>
                            <td>Lockbox.</td>
                        </tr>
                        <tr>
                            <td id="fb_link"><a href={newFbSite + "ChrisHughes"} style={{color: "#538ADC"}}>Chris Hughes</a></td>
                            <td>Pressguy</td>
                        </tr>
                        <tr>
                            <td id="fb_link" style={{height: "30px"}}>
                                <Link to={pagesRoutes.contact.path} style={{color: "#538ADC"}}>Contact us.</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{marginTop: "-165px", marginBottom: "5px", marginRight: "0", marginLeft: "320px"}}><img src={MarkZuckerbergscard} alt="Mark-Zuckerberg's business card" /></div>
            </div>
        </div>
      )
}

export default AboutUs;