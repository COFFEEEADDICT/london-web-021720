import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "../containers/HogList"
import HogDetails from "../components/HogDetails"
import hogs from "../porkers_data";

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedHog: null,
      greasedFilter: false,
      sortByName: true
    }
  }

  // Get the file path to a specific hog's image by going into hog-imgs and then turning the hog's name into lower case, joining every individual word with an undescore and then concatenating .jpg on the end e.g. Piggy smalls becomes hog-imgs/piggy_smalls.jpg
  getImg(hog) {
    return `hog-imgs/${hog.name.toLowerCase().split(" ").join("_")}.jpg`
  }

  // Flip the state of greasedFilter so that we know whether to render all the hogs or just the greased ones
  toggleGreasedFilter = () => {
    this.setState({
      greasedFilter: !this.state.greasedFilter
    })
  }

  // Flip the state of sortByName so that we know whether to sort the hogs by name or weight
  toggleSortByName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  // Set the state of selectedHog to a specific hog so that we'll know whether to render HogList or a HogDetails component for the selectedHog
  selectHog = (hog) => {
    this.setState({
      selectedHog: hog
    })
  }

  // Set the state of selectedHog back to null, so that App will now render HogList instead of a specific HogDetails component
  clearSelectedHog = () => {
    this.setState({
      selectedHog: null
    })
  }

  // Select only the hogs that are greased
  filterGreasedHogs() {
    return hogs.filter(hog => hog.greased)
  }

  // Sort the hogs we've been given by the property we've been given - either name or weight
  sortHogs(hogsToSort, property) {
    return hogsToSort.sort((a, b) => a[property]> b[property] ? 1 : -1)
  }

  render() {
    // First, check if we have a selectedHog in state in order to determine whether to render a HogDetails component for that hog, or a HogList component to render all of the hogs
    if (this.state.selectedHog) {
      return (
        <div>
          <Nav />
          { /* Pass all of this hog's details as individual props, as well as a function to clear the state of selectedHog */}
          <HogDetails
           name={this.state.selectedHog.name} img={this.getImg(this.state.selectedHog)} specialty={this.state.selectedHog.specialty} weight={this.state.selectedHog.weight} highestMedal={this.state.selectedHog["highest medal achieved"]} clearSelectedHog={this.clearSelectedHog} />
        </div>
      )
    } else {
        // First, use the state of greasedFilter to check whether we need to render all of the hogs or only the greased hogs
        let hogsToRender = this.state.greasedFilter ? this.filterGreasedHogs() : hogs

        // Then, use the state of sortByName to check whether we should sort that list of hogs by name or weight
        hogsToRender = this.state.sortByName ? this.sortHogs(hogsToRender, "name") : this.sortHogs(hogsToRender, "weight")

        return (
          <div className="App">
            <Nav />
            { /* Add a click event to this button that will flip the state of greasedFilter, triggering a rerender. The text of the button will change depending on the current state of greasedFilter */}
            <button onClick={this.toggleGreasedFilter}>{ this.state.greasedFilter ? "Show All Hogs" : "Show Only Greased Hogs"}</button>
            { /* Add a click event to this button that will flip the state of sortByName, triggering a rerender. The text of the button will change depending on the current state of sortByName */}
            <button onClick={this.toggleSortByName}>{ this.state.sortByName ? "Sort Hogs by Weight" : "Sort Hogs by Name"}</button>
            {/* Pass down the array of hog objects that HogList needs to render - we've already decided whether this needs to be a filtered list and whether it's sorted by name or age, so HogList only has to worry about rendering whatever it's given. Also pass functions to allow it to access the img url of every hog and to to set the state of selectedHog */}
            <HogList hogs={hogsToRender} getImg={this.getImg} selectHog={this.selectHog} />
          </div>
        );
      }
  }
}

export default App;
