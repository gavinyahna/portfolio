import React from "react";
import "./Footer.css";

class Footer extends React.Component {

    state = {
        innerWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize() {
        this.setState({innerWidth: window.innerWidth})
    }

    render() {
        if (innerWidth < 780) {
            return (
                <></>
            );
        }
        return (
            <div className="footer">
                <b>gavinyahna@gmail.com</b>
                <b>|</b>
                <a href="https://github.com/gavinyahna" target="_blank" rel="noreferrer">
                    <b>github.com/gavinyahna</b>
                </a>
            </div>
        );
    }
}

export default Footer;