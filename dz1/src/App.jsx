import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Posts from "./pages/Posts.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route path="about" element={<Posts />} />
                    {/*<Route path="posts" element={<PostPage  />} />*/}
                </Route>
            </Routes>
        </>
    );
}

export default App;