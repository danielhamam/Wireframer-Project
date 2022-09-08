// THIS FILE KNOWS HOW TO MAKE ALL THE ACTION
// OBJECTS THAT WE WILL USE. ACTIONS ARE SIMPLE
// LITTLE PACKAGES THAT REPRESENT SOME EVENT
// THAT WILL BE DISPATCHED TO THE STORE, WHICH
// WILL TRIGGER THE EXECUTION OF A CORRESPONDING
// REDUCER, WHICH ADVANCES STATE

// THESE ARE ALL THE TYPE OF ACTIONS WE'LL BE CREATING
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// THESE CREATORS MAKE ACTIONS ASSOCIATED WITH USER ACCOUNTS

/*********************************************************************
* PURPOSE: When called, returns object with required information
* WHERE IS IT USED?: Used in asyncHandler functions / mapDispatchtoProps
************************************************************************/

export const register = (newUser, firebaseRef) => {
    return { 
        type: 'REGISTER', 
        user : newUser,
        firebase : firebaseRef 
    }
};

export const registerSuccess = (newUser) => {
    return { 
        type: 'REGISTER_SUCCESS',
        user: newUser
    }
};
export function registerError(error) { 
    return { type: 'REGISTER_ERROR', error }
};
export function loginSuccess() {
    return { type: 'LOGIN_SUCCESS' }
};
export function loginError(error) {
    return { type: 'LOGIN_ERROR', error }
};
export function logoutSuccess() {
    return { type: 'LOGOUT_SUCCESS' }
};

// THESE CREATORS MAKE ACTIONS FOR ASYNCHRONOUS WIREFRAME UPDATES
export function createWireFrame(wireframe) {
    return {
        type: 'CREATE_WIREFRAME',
        wireframe
    }
}
export function createWireFrameError(error) {
    return {
        type: 'CREATE_WIREFRAME_ERROR',
        error
    }
}