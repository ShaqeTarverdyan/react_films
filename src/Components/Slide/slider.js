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
import './styles.css';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: [],
            currentIndex: 0,
            translateValue: 0
        }
    }
    componentDidMount() {
        fetch('https://www.magento.am/api/slider.php')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    slider: data
                })
            )
    }
    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {
           return ;
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
       
        this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
    }))
    }

goToNextSlide = () => {
    const sliderImages = this.state.slider.map(item => (
        item.image
    ))
    if (this.state.currentIndex === sliderImages.length - 1) {
        return this.setState({
            currentIndex: 0,
            translateValue: 0
        })
    }
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
    }))
}
slideWidth = () => {
   return document.querySelector('.slide').clientWidth;;
}
render() {
    return (
        <div className='slider'>

            <div className='slider-wrapper'
                style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 1s'
                }}>
                {
                    this.state.slider.map((item, i) => (
                        <Slide key={i} image={item.image} />
                    ))
                }
            </div>


            <LeftArrrow goToPrevSlide={this.goToPrevSlide} />
            <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>

    );
}
}

export default Slider;