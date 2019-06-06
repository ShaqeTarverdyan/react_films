import React from 'react';
import { Card , Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { getFilm } from '../State.Management/Actions/actions';

class FilmCard extends React.Component {
    getLink = (item) => {
        const uniqId = item.imdbID;
        return uniqId
    }
    render() {
        if (this.props.loading) {
            return <Segment loading />
        }
        if (this.props.error) {
            return <div>{this.props.error}</div>
        }
        return (
            <>
                {
                    this.props.films.map((item, id) =>
                        <Card 
                            fluid
                            key={id} 
                            style={{textAlign:'center', height:'3vw'}}
                        >
                            <NavLink to={item.imdbID}>
                                {item.Title}
                            </NavLink>
                        </Card>
                    )
                }
            </>

        )
    }
}
const mapStateToDispatch = state => {
    return {
        loading: state.loading,
        error: state.error,
        searchFilm: state.searchFilm,
        films: state.films,
    }
}
export default connect(mapStateToDispatch)(FilmCard);