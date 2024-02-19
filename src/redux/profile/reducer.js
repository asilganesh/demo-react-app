

const initialState={
    name:null,
    salaray:null
}

export function profileReducer(state=initialState,action){

    switch(action.type){
        case "FETCH_DETAILS_SUCCESS":
            return{...state,name:action.payload.name,salaray:action.payload.salary}
        default:
            return state
    }
}