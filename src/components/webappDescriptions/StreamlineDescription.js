import React from "react";
import StreamlineLogin from "../../img/StreamlineLogin.png"

function StreamlineDescription() {
    return (
        <>
            <div className="scroll left">
                <img src={StreamlineLogin} className="website-picture"/>
            </div>
            <div className="right webapp-description">
                <h2>About Streamline</h2>
                <p className="intro-text">
                    Streamline is a combination of the best features of google keep which is used
                     for note taking and google calendar.
                </p>
                <p className="intro-text">
                    You are able to take notes on the right side of the webapp and drag them around
                     and change their color to organize them. When you drag a note from the 
                    calendar on the left side of the screen a google calendar event on that day and 
                    time is created.
                </p>
                <p className="intro-text">
                    Since you sign into the application with google you can use Streamline on a computer
                    and all of your notes and calendar events will be synced to your google account.
                </p>
                <h2>Technologies and Frameworks</h2>
                <p className="intro-text">
                    Frontend - Ruby and BootstrapUI <br/>
                    Backend - Ruby on Rails <br/>
                    DB - MongoDB <br/>
                    Hosting - Heroku
                </p>
            </div>
        </>
    );
}

export default StreamlineDescription;
