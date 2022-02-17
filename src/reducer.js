import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MEGAS_PENDING,
    REQUEST_MEGAS_SUCCESS,
    REQUEST_MEGAS_FAILED
} from "./components/constant";

const initialState = {
    searchField: ""
};

export const searchMegas = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
};

const initialMegasState = {
    isPending: false,
    megas: [],
    error: ""
};

export const requestMegas = (state=initialMegasState, action={}) => {
    switch (action.type) {
        case REQUEST_MEGAS_PENDING:
            return {...state, isPending: true};
        case REQUEST_MEGAS_SUCCESS:
            return {...state, megas: action.payload, isPending: false};
        case REQUEST_MEGAS_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}

