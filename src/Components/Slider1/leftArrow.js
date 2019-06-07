import React from 'react'
import {connect} from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions';

const LeftArrow = (props) => {
  return   <div style={{width:'300px'}}> <button onClick={props.goToLeft}>left</button></div>
}


const mapStateToProps = state => {
    return {
        slider:state.slider
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToLeft:() => dispatch(actionCreator.goToLeft())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LeftArrow);



