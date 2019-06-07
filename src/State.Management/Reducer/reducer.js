import '../../Components/Slider1/styles.css';
const initialState = {
    loading: false,
    error: '',
    searchFilm: '',
    films: [],
    slider: [],
    currentIndex: 0,
    translateValue: 0,
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type === 'GET_INPUT_VALUE') {
        const event = action.payload
        const newStateValue = { ...newState, [event.target.name]: event.target.value }
        return newStateValue;
    }
    else if (action.type === 'GET_FILM') {
        const stateAfterRequset = {
            ...newState,
            loading: false,
            searchFilm: '',
            films: [...newState.films, action.payload]
        }
        return stateAfterRequset;
    }
    else if (action.type === 'LOADING') {
        newState.loading = true
    }
    else if (action.type === 'ERROR') {
        newState.error = action.payload
    }
    else if (action.type === 'GET_SLIDER') {
        const stateAfterSLiderRequset = {
            ...newState,
            loading: false,
            slider: [...newState.slider, action.payload]
        }
        console.log('stateAfterSLiderRequset', stateAfterSLiderRequset)
        return stateAfterSLiderRequset;
    }
    else if (action.type === 'GO_TO_RIGHT') {

        const slideWidth = () => {
            const elem = document.querySelector('.slide').clientWidth
            return elem
        }
        console.log('slideWidth',slideWidth())
        console.log('slider', newState.slider);
        const sliderImages = newState.slider.map(item => (
           console.log('item',item),
           item.map(cur => (
                console.log('cur',cur)
           ))
        ));
        console.log('sliderImages',sliderImages.length)
        if (newState.currentIndex === sliderImages.length - 1) {
                newState.currentIndex = 0
                newState.translateValue= 0
        }  
  
        newState.currentIndex +=  1;
        newState.translateValue -=  (slideWidth())
    }

    else if (action.type === 'GO_TO_LEFT') {
    }

    return newState;
}

export default reducer;