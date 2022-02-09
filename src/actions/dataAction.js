import { useDispatch } from "react-redux";
import Fetch from "../API/fetch";

export const FetchData = () => {
    Fetch.get_request("task_templates").then((res) => {
        useDispatch({
            type: "FetchData",
            payload, res,
        })
    }).catch((err) => console.log(err))
}