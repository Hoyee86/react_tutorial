import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import Missing from "./Missing";
import Footer from "./Footer";
import { format } from "date-fns";
import api from "./api/posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");

        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filterResult = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search, toLowerCase())
    );

    setSearchResult(filterResult.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), `MMM dd, yyy pp`);
    const newPost = { id, title: postTitle, dateTime, body: postBody };

    try {
      const response = await api.post("/posts", newPost);

      const allPosts = [...posts, response];
      setPosts(allPosts); // this variable is declare to marge both the old and new posts
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleDelete = async(id) => {
    try {
      await api.delete(`/posts/${id}`)
  
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList); // it help us to update our posts
    setPostBody("");
    navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }

  };
  return (
    <div className="App">
      <Header title="DLT Blogs" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResult} />} /> //** forward
        slash(/) means or specify home page **//
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="" element={<Missing />} /> //* the outsterisk will show
        you that the page can not be found **/
      </Routes>
      <Footer />
    </div>
  );
};

export default App;