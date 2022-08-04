import React from "react";
import IntraleaguesHome from "../../img/IntraleaguesHome.png"

function IntraleaguesDescription() {
    return (
        <>
            <div className="scroll left">
                <img src={IntraleaguesHome} className="website-picture"/>
            </div>
            <div className="right webapp-description">
                <h2>About Intraleagues</h2>
                <p className="intro-text">
                    Intraleagues started out as a Capstone class project at Brandeis University 
                    where I presented a business proposal along with three fellow students. We secured 
                    a spark grant for $5,000 from our final class presentation and used that to 
                    start work on this project.
                </p>
                <p className="intro-text">
                    Next we worked to expand Intraleagues to other colleges around the Boston area and at
                    one point had leagues up and running at more than 5 schools.
                </p>
                <p className="intro-text">
                    Each participating student would create a profile on the Intraleagues webapp which
                    would map their game accounts to their Intraleagues account and school email address.
                </p>
                <p className="intro-text">
                    Our league ran tournaments with prize pools for each school
                    similar to how intramural sports tournaments run. Teams would get notifications about when
                    their matches had to be played, and would report their results through the webapp.
                </p>
                <h2>Technologies and Frameworks</h2>
                <p className="intro-text">
                    Frontend - Vue.js <br/>
                    Backend - Node.js <br/>
                    DB - PostgreSQL
                </p>
            </div>
        </>
    );
}

export default IntraleaguesDescription;
