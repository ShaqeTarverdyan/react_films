import React from 'react';
import { connect } from 'react-redux';
import { Table ,Segment} from 'semantic-ui-react';


const Row = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.name}</Table.Cell>
            <Table.Cell>{props.value}</Table.Cell>
        </Table.Row>
    );
}
class FilmDescription extends React.Component {
    getFilm = () => {
        const paramsId = this.props.match.params.id;
        console.log('paramsId', paramsId);
        const currentFilm = this.props.films.filter(film => film.imdbID === paramsId)[0];
        return currentFilm;
    }
    render() {
        const film = this.getFilm();
        console.log('test', film);
        const data = [
            { name: 'Title', value: film.Title },
            { name: 'Actors', value: film.Actors },
            { name: 'Awards', value: film.Awards },
            { name: 'Country', value: film.Country },
            { name: 'Genre', value: film.Genre },
            { name: 'Language', value: film.Language },
            { name: 'Runtime', value: film.Runtime },
            { name: 'Writer', value: film.Writer },
            { name: 'Year', value: film.Year },

        ]
        return (
            <Segment>
                <Table>
                    <Table.Header as='thead' fullWidth>
                        <Table.Row>
                            <Table.HeaderCell
                                colSpan='16'
                                style={{ textAlign: 'center', fontSize: '3vw' }}
                            >
                                {film.Title}
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {
                        data.map(item =>
                            <Row {...item} />
                        )
                    }
                </Table>
            </Segment>

        );
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
export default connect(mapStateToDispatch)(FilmDescription);