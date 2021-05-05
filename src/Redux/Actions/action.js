import axios from "axios";
export const GET_BOOKS = "GET_BOOKS"

export const getBooks = () => {
    return (dispatch) => {
        return axios.get("https://backend-bookstore.herokuapp.com/bookstore_user/get/book").then(result =>
            dispatch(books(result.data.result))
        )
    }

};

export const books = (data) => {
    console.log(data)
    return {
        type: "GET_BOOKS",
        payload: data
    };
};



