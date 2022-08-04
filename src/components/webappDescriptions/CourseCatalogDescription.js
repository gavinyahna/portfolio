import React from "react";
import CourseCatalogList from "../../img/CourseCatalogList.png"

function CourseCatalogDescription() {
    return (
        <>
            <div className="scroll left">
                <img src={CourseCatalogList} className="website-picture"/>
            </div>
            <div className="right webapp-description">
                <h2>About Course Catalog</h2>
                <p className="intro-text">
                    While taking capstone software engineering at Brandeis University one of the projects
                    for the class was to build a webapp that loads in all of the courses currently offered
                    at Brandeis.
                </p>
                <p className="intro-text">
                    This webapp was built using Ruby on Rails and a Mongo No-SQL database to load in the courses
                    from a pre-existing API. The frontend was set up using Bootstrap UI, and the site was hosted
                    and deployed using Heroku.
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

export default CourseCatalogDescription;
