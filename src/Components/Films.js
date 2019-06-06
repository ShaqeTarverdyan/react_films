import React from 'react';
import { connect } from 'react-redux';
import FilmCard from '../Components/FilmCard';
import { Card } from 'semantic-ui-react';

class Films extends React.Component {
    render() {

        return (

            <Card.Group
                itemsPerRow='4'
                style={{
                    width:'90%',
                    //  height:'40vw',
                     backgroundColor:'rgba(0,0,0,0.3)',
                     margin:'auto',
                     borderRadius:'0.5vw'
                 }}
            >
                <FilmCard />
            </Card.Group>
        );
    }

}
const mapDispatchToState = state => {
    return {
        loading: state.loading,
        error: state.error,
        searchFilm: state.searchFilm,
        films: state.films,
    }
}
export default connect(mapDispatchToState)(Films);