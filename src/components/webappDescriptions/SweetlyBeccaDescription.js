import React from "react";
import SweetlyBeccaHome from "../../img/SweetlyBeccaAbout.png"

function SweetlyBeccaDescription() {
    return (
        <>
            <div className="scroll left">
                <img src={SweetlyBeccaHome} className="website-picture"/>
            </div>
            <div className="right webapp-description">
                <h2>About Sweetly Becca</h2>
                <p className="intro-text">
                    Sweetly Becca is a website that I created with one other developer to promote
                    a friend's baking business.
                </p>
                <p className="intro-text">
                    The website had Instagram integration so all of the latest posts on Becca's
                    baking Instagram would appear on the home page of the site.
                </p>
                <p className="intro-text">
                    There was a catalog of all of the currently avaliable items on the site 
                    as well as prices, descriptions, and allergens for each item.
                </p>
                <h2>Technologies and Frameworks</h2>
                <p className="intro-text">
                    Frontend - React.js and MaterialUI <br/>
                    Backend - Node.js <br/>
                    DB - MySQL
                </p>
            </div>
        </>
    );
}

export default SweetlyBeccaDescription;
