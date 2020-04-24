import React, { Component } from "react";
import Hog from "../components/Hog"
import HogDetails from "../components/HogDetails"

// A container component - this has been passed the array of hog objects as props, which it will use to render each individual Hog component
class HogList extends Component {

  // For each hog object in the array passed down as a prop, render a Hog component and pass down that hog's name and img as props, as well as a function to set the state of selectedHog to be that hog
  renderHogs() {
    return this.props.hogs.map((hog, i) => <Hog
       name={hog.name} img={this.props.getImg(hog)} selectHog={this.props.selectHog} key={i} hog={hog} />)
  }

  render() {
    return (
      <div>
        { /* Render all of the Hog components based on the current version of the hogs prop passed down by App */}
        { this.renderHogs() }
      </div>
    );
  }
}

export default HogList;
