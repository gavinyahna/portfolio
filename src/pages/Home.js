import React from "react";
import Button from '@mui/material/Button';
import PictureTabs from "../components/pictureTabs/PictureTabs"
import ContentBox from "../components/contentBox/ContentBox"
import portrait from "../img/SquarePortrait.jpg"
import "./Home.css";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: false};
  }

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
        <div className="container">
          <ContentBox>
            <img src={portrait} className="portrait"/>
            <p className="intro-text">Mobile is not currently supported, please view this site on a computer</p>
          </ContentBox>
        </div>
       
      );
    }
    if (!this.state.hide) {
    return (
      <div className="container">
        <ContentBox className="left">
          <img src={portrait} className="portrait"/>
          <p className="intro-text">I am a fullstack software engineer with 3 years of professional experience.</p>
          <p className="intro-text">I have been developing software for 7 years working on webapps and video games.</p>
          <p className="intro-text">
            Check out my projects from the links in the navbar or 
            <Button className="home-button" variant= "contained" onClick={() =>this.setState({hide: true})}>
              Enjoy the view
            </Button>
          </p>
        </ContentBox>
        <ContentBox className="right">
          <p className="intro-text">Here are a few things I am passionate about.</p>
          <PictureTabs/>
        </ContentBox>
      </div>
    );
    } else {
      return (
        <div className="container">
          <Button className="white-home-button" variant= "contained" onClick={() =>this.setState({hide: false})}>
            About Me
          </Button>
        </div>
        
      );
    }
  }
}

export default Home;
