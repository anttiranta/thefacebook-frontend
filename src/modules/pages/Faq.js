// Imports
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet'

// App imports
import pagesRoutes from '../../setup/routes/pages'

const Faq = () => {
    return (
        <div id="faq_box">
            <Helmet>
                <title>FAQ - Thefacebook</title>
            </Helmet>

            <div style={{backgroundColor: "#4C70A0", color: "white"}}>Frequently Asked Questions</div>
            
            <h1 style={{textAlign: 'center'}}>[ FAQ ]</h1>
            
            <div id="faq_box_links">
                <ul>
                <li><HashLink to={pagesRoutes.faq.path + "#0"}> What is Thefacebook?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#1"}> How do you get our information? Does the school give it to you?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#2"}> How can I protect my privacy?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#3"}> What is the social net?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#4"}> Why does the social net repeat people?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#5"}> How do I search for something besides names?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#6"}> If I reject someone, will they find out?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#7"}> If I remove someone from my friends list, are they notified?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#8"}> How can I view the visualization?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#9"}> Why is the visualization slow?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#10"}> How do I navigate through the visualization?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#11"}> Can I change my name and password?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#12"}> When I try to log in, the page just refreshes. What's going on?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#13"}> What is poking?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#14"}> Who made this site?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#15"}> When was the site started?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#16"}> What kind of graph theory algorithms are you using to process connections?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#17"}> The site says I don't have a valid email address. Why?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#18"}> My school is not on thefacebook network - why not and how can it be added?</HashLink></li>
                    <li><HashLink to={pagesRoutes.faq.path + "#19"}> I have a question that's not covered in the FAQ. How can I ask it?</HashLink></li>
                </ul>
            </div>
            <div id="faq_boxes">
                <div id="0" name="" style={{backgroundColor: "#4C70A0", color: "white"}}>What is Thefacebook?</div>
                <p>
                    Thefacebook is an online directory that connects people through social networks at colleges and universities.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="1" style={{backgroundColor: "#4C70A0", color: "white"}}>How do you get our information? Does the school give it to you?</div>
                <p>
                    Your school is not providing us with any information about you. All information and pictures are provided voluntarily by users.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="2" style={{backgroundColor: "#4C70A0", color: "white"}}>How can I protect my privacy?</div>
                <p id="faq_box_links">
                    You can adjust your <Link to={pagesRoutes.privacy.path} style={{fontSize: "12px"}}> privacy </Link> settings to allow only people within certain divisions of certain schools to see it. You can also set it so that only people who share something in common with you (eg. house, year, a course, friends) can see your information. And further, you can create different privacy settings for the four different parts of your profile: contact information, personal information, courses and friends.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="3" style={{backgroundColor: "#4C70A0", color: "white"}}>What is the social net?</div>
                <p>
                    Your social net is the group of all users whose privacy settings allow you to view their information. To make things more interesting, we also limit it to only users who have submitted pictures. When you click on "social net", ten random users from your social net are displayed.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="4" style={{backgroundColor: "#4C70A0", color: "white"}}>Why does the social net repeat people?</div>
                <p>
                    Since the selection of who is displayed is random, there is a chance that the same person will be displayed on two pages. This problem will alleviate itself as more people join.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="5" style={{backgroundColor: "#4C70A0", color: "white"}}>How do I search for something besides names?</div>
                <p>
                    You can either click the "Search all Fields" button on the search page, or try the advanced search page.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="6" style={{backgroundColor: "#4C70A0", color: "white"}}>If I reject someone, will they find out?</div>
                <p>
                    No. When you reject someone, their friend request will leave your list of friendships to confirm, but they will not be notified. They also will not be able to send you another friend request for some amount of time, so to them, it will just seem as if you haven't confirmed their friendship yet.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="7" style={{backgroundColor: "#4C70A0", color: "white"}}>If I remove someone from my friends list, are they notified?</div>
                <p>
                    No, but all friend links are reciprocal, so you are removed from their list as well.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="8" style={{backgroundColor: "#4C70A0", color: "white"}}>How can I view the visualization?</div>
                <p id="faq_box_links">
                    In order to see the visualized social nets, you need to have the SVG plugin for your browser. Installation takes about 15 seconds; you can get it <a style={{fontSize: "12px"}} href="http://www.adobe.com/svg/viewer/install/main.html">here</a>.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="9" style={{backgroundColor: "#4C70A0", color: "white"}}>Why is the visualization slow?</div>
                <p>
                    Every time you view a visualization, we need to figure out whether you have the appropriate privileges to see each person on the graph. This takes time. In addition, in order to maintain the overall performance of the rest of the site, we have set up the site to process other requests with a higher priority than requests to generate visualizations.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="10" style={{backgroundColor: "#4C70A0", color: "white"}}>How do I navigate through the visualization?</div>
                <p>
                    Hold down 'Alt' while dragging to scroll, or right-click to zoom. We apologize for the difficulty of navigating the visualizations. We didn't make the SVG viewer; we just use it to bring you pretty pictures.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="11" style={{backgroundColor: "#4C70A0", color: "white"}}>Can I change my name and password?</div>
                <p>
                    Yes -- you can request a name change and change your password on your my account page. For quality control purposes, we confirm all name changes before they take place. Password changes take effect immediately.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="12" style={{backgroundColor: "#4C70A0", color: "white"}}>When I try to log in, the page just refreshes. What's going on?</div>
                <p>
                    You need to enable cookies on your browser. In order to do this in Internet Explorer, go to tools: options from the menu at the top. Then click on the privacy tab and alter your privacy settings to allow cookies. Finally, close and restart your browser and try logging in again.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="13" style={{backgroundColor: "#4C70A0", color: "white"}}>What is poking?</div>
                <p>
                    We have about as much of an idea as you do. We thought it would be fun to make a feature that has no specific purpose and to see what happens from there. So mess around with it, because you're not getting an explanation from us.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="14" style={{backgroundColor: "#4C70A0", color: "white"}}>Who made this site?</div>
                <p id="faq_box_links">
                    See the <a style={{fontSize: "12px"}} href={pagesRoutes.aboutUs.path} >about page</a>.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="15" style={{backgroundColor: "#4C70A0", color: "white"}}>When was the site started?</div>
                <p>
                    It was launched to the public on Wednesday, February 4th, 2004.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="16" style={{backgroundColor: "#4C70A0", color: "white"}}>Is this a class project?</div>
                <p>
                    Nope, just for fun.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="17" style={{backgroundColor: "#4C70A0", color: "white"}}>What kind of graph theory algorithms are you using to process connections?</div>
                <p>
                    I'm going to pretend you didn't just ask that.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="18" style={{backgroundColor: "#4C70A0", color: "white"}}>The site says I don't have a valid email address. Why?</div>
                <p id="faq_box_links">
                    Currently, you must register with a valid school email from one of the schools listed on the <Link to={pagesRoutes.home.path} style={{fontSize: "12px"}}> front page</Link>. This is both the way we authenticate your affiliation with that school's network, and the way we direct your login.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="19" style={{backgroundColor: "#4C70A0", color: "white"}}>My school is not on thefacebook network - why not and how can it be added?</div>
                <p id="faq_box_links">
                    Each school on the network has a custom site built for it before students from that school can register. We plan to include many new schools to the network over the next year. This requires no action on your part or by your school, but we do take <Link to={pagesRoutes.contact.path} style={{fontSize: "12px"}}>suggestions</Link>.
                </p>
            </div>
            <div id="faq_boxes">
                <div id="20" style={{backgroundColor: "#4C70A0", color: "white"}}>I have a question that's not covered in the FAQ. How can I ask it?</div>
                <p id="faq_box_links">
                    <Link to={pagesRoutes.contact.path} style={{fontSize: "12px"}}>Email us</Link>.
                </p>
            </div>
        </div>
      )
}

export default Faq;