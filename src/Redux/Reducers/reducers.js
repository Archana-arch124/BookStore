
const initialState = {
    books: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            //console.log(action.payload)
            return {
                ...state, books: [...action.payload]
            }

        default: return state
    }
}

export default bookReducer