import React from "react"

// Render all of a hog's details, with a button that will let us clear the state of selectedHog to null to trigger a rerender to display all of the hogs instead
const HogDetails = ({ name, img, specialty, weight, highestMedal, clearSelectedHog}) => {
  return(
    <div>
      <h1>{name}</h1>
      <img src={img}/>
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Highest Medal Achieved: {highestMedal}</p>
      <button onClick={clearSelectedHog}>Show All Hogs</button>
    </div>
  )
}

export default HogDetails
