import {useEffect, useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const PostPage = () =>{
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(response.data)
        }
        fetchPosts();
    },[])
    return(
        <div>
            <ul>
                {posts.map((post)=>(
                <li key ={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>

                </li>
                    ))}
            </ul>
        </div>
    )
}
export default PostPage 