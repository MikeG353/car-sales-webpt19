import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../actions/additionalFeaturesActions'

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={(e) => {
          e.preventDefault()
          props.removeFeature(props.feature)
        }}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature)
