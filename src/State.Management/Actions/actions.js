export const getInputvalue = (event) => {
    return {
        type:'GET_INPUT_VALUE',
        payload:event
    }
}

export const getFilm = (resp) => {
    console.log('resp',resp)
    return {
        type:'GET_FILM',
        payload:resp
    }
}

export const loading = () => {
    return {
        type:'LOADING'
    }
}
export const error = reject => { 
    return {
        type:'ERROR',
        payload:reject
    }
}

export const makeRequset = (val) => {
    return dispatch => {
        dispatch(loading());
        fetch(`http://www.omdbapi.com/?t=${val}&apikey=d6dae3f1&plot=full`)
            .then(response => response.json())
            .then(resp => {
                console.log('respoo', resp)
                dispatch(getFilm(resp))
                if(resp.Response === 'False') {
                    dispatch(error(resp.Error))
                }
            });

    }
}
export const getSlider = (resp) => {
    return {
        type:'GET_SLIDER',
        payload:resp
    }
}
export const makeRequestForSlider = () => {
    return dispatch => {
        dispatch(loading());
        fetch('https://www.magento.am/api/slider.php')
            .then(response => response.json())
            .then(resp => {
                console.log(resp)
                dispatch(getSlider(resp))
            })
            .catch(error.message)
    }
}

export const goToLeft = () => {
    return {
        type:'GO_TO_LEFT'
    }
}

export const goToRight = () => {
    return {
        type:'GO_TO_RIGHT'
    }
}