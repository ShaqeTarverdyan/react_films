import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions';

const RightArrow = (props) => {
    return (
        <div onClick={props.goToRight}>
            <Icon name='chevron right' />
        </div>
    )
}

const mapStateToDispatch = state => {
    return {
        slider: state.slider,
        currentIndex: state.currentIndex,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToRight: () => dispatch(actionCreator.goToRight())
    }
}
export default connect(mapStateToDispatch, mapDispatchToProps)(RightArrow);