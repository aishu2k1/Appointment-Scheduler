import React, {useReducer} from "react";
import {reducer, initialState} from "./reducer";

const ApplicationContext = React.createContext(initialState);

function ApplicationProvider(props) {
    const [state, dispatch] = useReducer(reducer,initialState);

    return (

        <ApplicationContext.Provider value={{state,dispatch}}>
            {props.children}
        </ApplicationContext.Provider>
    );
}

export {ApplicationContext,ApplicationProvider};