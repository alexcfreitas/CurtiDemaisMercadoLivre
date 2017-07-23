import axios from 'axios'

const URL = 'http://localhost:3003/api/shots'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().curti.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const like = (shot) => {
    return dispatch => {
        axios.put(URL, { shot })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const handleViewShot = (shot) => {
    return window.location = `#/shot/${shot._id}`
    
}

export const alterarTamanho = () => {
    var testeParent = $('.dribbble').parent().attr('class');
       return dispatch => { 
           if(testeParent !== 'col-xs-12 col-sm-12 col-md-6 tamanhoAlterado' ){
               $('.dribbble').parent().removeClass().addClass("col-xs-12 col-sm-12 col-md-6 tamanhoAlterado");
           } else {
               $('.dribbble').parent().removeClass().addClass("col-xs-12 col-sm-6 col-md-4");
           }
       }
}
