const initialState = {
    loading: false,
    error: '',
    searchFilm: '',
    films: [],
    slider:[],
    currentIndex: 0,
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type === 'GET_INPUT_VALUE') {
        const event = action.payload
        const newStateValue = { ...newState, [event.target.name]: event.target.value }
        return newStateValue;
    }
    else if(action.type === 'GET_FILM') {
        const stateAfterRequset = {
            ...newState,
            loading:false,
            searchFilm:'',
            films:[...newState.films, action.payload]
        }
        return stateAfterRequset;
    }
    else if(action.type === 'LOADING') {
        newState.loading = true
    }
    else if(action.type === 'ERROR') {
        newState.error = action.payload
    }
    else if(action.type === 'GET_SLIDER') {
        const stateAfterSLiderRequset = {
            ...newState,
            loading:false,
            slider:[...newState.slider, action.payload]
        }
        console.log('stateAfterSLiderRequset',stateAfterSLiderRequset)
        return stateAfterSLiderRequset;
    }
    return newState;
}

export default reducer;