import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../actions'

const MuseumPicker = ({ updateMuseumFilter, museumFilter }) => {
  return (
    <div className='row'>
      <div className='ui menu'>
        <div
          className={`item ${museumFilter === '' ? 'active' : ''}`}
          onClick={() => updateMuseumFilter('')}
        >
          All Museums
        </div>
        <div
          className={`item ${
            museumFilter === 'National Gallery of Art, Washington D.C.'
              ? 'active'
              : ''
          }`}
          onClick={e => updateMuseumFilter(e.target.innerText)}
        >
          National Gallery of Art, Washington D.C.
        </div>
        <div
          className={`item ${
            museumFilter === 'Unknown Museum' ? 'active' : ''
          }`}
          onClick={e => updateMuseumFilter(e.target.innerText)}
        >
          Unknown Museum
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    museumFilter: state.museumFilter
  }
}

export default connect(mapStateToProps, actions)(MuseumPicker)
