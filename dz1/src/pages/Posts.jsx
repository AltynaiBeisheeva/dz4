import {useEffect, useState} from "react"
import axios from "axios";
const Posts = () =>{
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await axios.get("(https://dummyjson.com/docs/posts")
            setPosts(response.data)
        }
        fetchPosts();
    },[])
    return(
        <div>
            <ul>
                {posts.map((post)=>(
                    <li key ={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Posts