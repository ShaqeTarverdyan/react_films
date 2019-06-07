import React from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions';

const RightArrow = (props) => {
    return (
        <div style={{width:'300px'}}>
            <button onClick={props.goToRight}>next</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        slider:state.slider
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToRight:() => dispatch(actionCreator.goToRight()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RightArrow);

