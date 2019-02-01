const initialState ={
    name: '',
    address: '',
    city: '',
    state:'',
    zipCode: '',
    image:'',
    monthly:'',
    desired:''
}

const UPDATE = 'UPDATE_STEP_ONE'

export function updateEverything(name, address, city, state, zipCode){
    return {
        type: UPDATE,
        payload: {
            name,
            address,
            city,
            state,
            zipCode

        }
    }
}

export default function reducer(state = initialState, action){
    console.log('reduce me')
    switch(action.type){
        case UPDATE:
        return Object.assign({}, state, action.payload);
        
        default:
        return state;
    }
}