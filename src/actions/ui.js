import { type } from "@testing-library/user-event/dist/type"
import { types } from "../types/types"



export const setError = ( err ) =>( {

    type: types.uiSetError,
    payload: err,
});

export const removeError = () =>( {

    type: types.uiRemoveError,
});