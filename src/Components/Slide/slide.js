import React from 'react';
import { connect } from 'react-redux';
import { Segment, Image } from 'semantic-ui-react';

const Slide = (props) => {
    return (
        <>

            {
                props.slider.map((item, id) => (
                    item.map(current => (
                        <Segment key={id}>
                            <Image src={current.image} />
                        </Segment>
                    ))

                ))
            }

        </>
    )


}

const mapStateToDispatch = state => {
    return {
        slider:state.slider
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToDispatch, mapDispatchToProps)(Slide);