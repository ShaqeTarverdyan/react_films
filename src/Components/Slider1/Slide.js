import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions';

class Slide extends React.Component{
    componentDidMount() {
        return this.props.makeRequestForSlider(this.props.slider);  
      }
    render() {
        return (
          <div className='slide'>dd</div>
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
        makeRequestForSlider:(val) => dispatch(actionCreator.makeRequestForSlider(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Slide);