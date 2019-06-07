import React from 'react';
import { connect } from 'react-redux';
import Slide from './Slide';
import LeftArrow from '../Slider1/leftArrow';
import RightArrow from '../Slider1/RightArrow';
import * as actionCreator from '../../State.Management/Actions/actions';


 class Slider_Redux extends React.Component {
    render() {
        return(
            <div>
               <Slide />
               <LeftArrow/>
               <RightArrow/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        slider:state.slider
    }
}
const mapDispatchToProps = dispatch => {
    return {
        makeRequestForSlider:(val) => dispatch(actionCreator.makeRequestForSlider(val)),
        goToLeftView:() => dispatch(actionCreator.goToLeft())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Slider_Redux);