export const initialState = {
    loginValid: true
};

export const reducer = (state = initialState, action) => {
    if (action.type) {
        return {...state, ...action.data};
    }
    return state;
};