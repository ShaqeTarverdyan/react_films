import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Segment, Image } from 'semantic-ui-react';
import * as actionCreator from '../../State.Management/Actions/actions';
import Slide from './slide';
import RightArrow from './RightArrow';
import LeftArrrow from './LeftArrrow';

class TestCarousel extends React.Component {
    componentDidMount() {
        console.log(this.props.makeRequestForSlider(this.props.slider))
    }
    render() {
        return (
            <Segment style={{
                transform:`translateX(${this.props.translateValue}px)`,
                
            }}>
                <Slide />

                
                <LeftArrrow/>
                <RightArrow/>
            </Segment>

        );
    }
}
const mapStateToDispatch = state => {
    return {
        loading: state.loading,
        error: state.error,
        slider: state.slider,
        translateValue: state.translateValue

    }
}
const mapDispatchToProps = dispatch => {
    return {
        makeRequestForSlider: (val) => dispatch(actionCreator.makeRequestForSlider(val))
    }
}
export default connect(mapStateToDispatch, mapDispatchToProps)(TestCarousel);