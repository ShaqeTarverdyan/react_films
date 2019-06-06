import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Segment, Image } from 'semantic-ui-react'
import * as actionCreator from '../../State.Management/Actions/actions';
import Slide from './slide';
import RightArrow from './arrows';
import LeftArrrow from './arrows';

class TestCarousel extends React.Component {
    componentDidMount() {
        console.log(this.props.makeRequestForSlider(this.props.slider))
    }
    render() {
        return (
            <Segment>
                <Slide />

                
                <LeftArrrow/>
                <RightArrow/>
            </Segment>
            // <>
             
            //         {
            //             this.props.slider.map((item, id) => (
            //                 item.map(current => (
            //                     <Segment>
            //                         <Image src={current.image} />
            //                     </Segment>
            //                 ))

            //             ))
            //         }
             


            // </>
        );
    }
}
const mapStateToDispatch = state => {
    return {
        loading: state.loading,
        error: state.error,
        slider: state.slider

    }
}
const mapDispatchToProps = dispatch => {
    return {
        makeRequestForSlider: (val) => dispatch(actionCreator.makeRequestForSlider(val))
    }
}
export default connect(mapStateToDispatch, mapDispatchToProps)(TestCarousel);