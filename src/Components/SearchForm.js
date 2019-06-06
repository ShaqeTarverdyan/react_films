import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../State.Management/Actions/actions';

class SearchForm extends React.Component {
    makeRequest = (e) => {
        e.preventDefault();
        this.props.makeRequset(this.props.searchFilm);

    }
    render() {
        return (
            <Form onSubmit={this.makeRequest}>
                <Input
                    icon='search'
                    name='searchFilm'
                    placeholder=' Please input film name'
                    onChange={this.props.getInputValue}
                    value={this.props.searchFilm}
                />
                <Button
                    positive
                    floated='right'
                    size='medium'
                    style={{ marginLeft: '1vw' }}
                >
                    Search
                </Button>
            </Form>
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
const mapDispatchToProps = dispatch => {
    return {
        getFilm: () => dispatch(actionCreator.getFilm),
        getInputValue: (event) => dispatch(actionCreator.getInputvalue(event)),
        makeRequset: (val) => dispatch(actionCreator.makeRequset(val))
    }
}
export default connect(mapStateToDispatch, mapDispatchToProps)(SearchForm); 