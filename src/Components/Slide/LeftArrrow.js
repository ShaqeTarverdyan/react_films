import React from 'react';
import { Icon , Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions'

const LeftArrrow = (props) => {
    return (
        <div className="backArrow " onClick={props.goToPrevSlide}>
             <Icon name='chevron left' size='large'/>
        </div>
    );
}



export default LeftArrrow;