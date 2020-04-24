import React from "react"

const Hog = ({ name, img, hog, selectHog }) => {
  // Render only a hog's name and img, with a button that will let us set the state of selectedHog to be this hog
  return(
    <div onClick={() => selectHog(hog)}>
      <h1>{name}</h1>
      <img src={img}/>
    </div>
  )
}


export default Hog
