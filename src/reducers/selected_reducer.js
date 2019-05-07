export default function(state = {
  loading: false, error: '', data: []
}, action){
    switch(action.type) {
        case 'CITY_SELECTED' :
            return action.payload;
    }
    return state;
}