import axios from "axios";
import {JsonPlaceholderAPI}
export const JsonPlaceholderAPI = axios.create({
    basaURL:"https://jsonplaceholder.typicode.com",
})
const respGet = await JsonPlaceholderAPI.get("/posts?_limit=5")
const respCreate = JsonPlaceholderAPI.post("/posts",{
    title:"foo",
    bode: "bar",
    userId:4
})
const respUpdate = JsonPlaceholderAPI.put("/posts/1",{
    title:"trd tyghu",
    bode: "bar",
    userId:4
})
