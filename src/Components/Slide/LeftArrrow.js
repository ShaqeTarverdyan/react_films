import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions'

const LeftArrrow = (props) => {
    return (
        <div onClick={props.goToLeft}>
             <Icon  name='chevron left'/>
        </div>
    );
}
const mapStateToDispatch = state => {
    return {
        slider:state.slider,
        currentIndex: state.currentIndex,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToLeft:() => dispatch(actionCreator.goToLeft())
    }
}
export default connect(mapStateToDispatch,mapDispatchToProps)(LeftArrrow);