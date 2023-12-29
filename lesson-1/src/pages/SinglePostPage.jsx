import {useParams} from "react-router-dom";
import {JsonPlaceholderAPI} from "../api.js";
import {useState,useEffect} from "react";


const SinglePostPage = () =>{
    const [post,setPost] = useState({})
    const {postId} = useParams()
    useEffect(() => {
        const getPost = async ()=>{
            const response = await JsonPlaceholderAPI.get(`/posts/$
           {postId}`)
            setPost(response.data)
        }
        getPost()
    }, []);
    return <div> {post.title}</div>;
}
export default SinglePostPage