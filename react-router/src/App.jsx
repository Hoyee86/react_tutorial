import { Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import Postpage from "./PostPage";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ad omnis iusto exercitationem nisi laudantium soluta nihil quia optio commodi neque dolores voluptas officia dolore aspernatur libero, quaerat recusandae inventore!",
    },
    {
      id: 2,
      title: "My Second Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ad omnis iusto exercitationem nisi laudantium soluta nihil quia optio commodi neque dolores voluptas officia dolore aspernatur libero, quaerat recusandae inventore!",
    },
    {
      id: 3,
      title: "My third Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ad omnis iusto exercitationem nisi laudantium soluta nihil quia optio commodi neque dolores voluptas officia dolore aspernatur libero, quaerat recusandae inventore!",
    },
    {
      id: 4,
      title: "My fourth Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ad omnis iusto exercitationem nisi laudantium soluta nihil quia optio commodi neque dolores voluptas officia dolore aspernatur libero, quaerat recusandae inventore!",
    },
    {
      id: 5,
      title: "My fifth Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ad omnis iusto exercitationem nisi laudantium soluta nihil quia optio commodi neque dolores voluptas officia dolore aspernatur libero, quaerat recusandae inventore!",
    },
  ]);

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id)
  };

  return (
    <div className="App">
      <Header title="DLT Blogs" />
      <Nav search={search} setsearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post" element={<NewPost />} />
        <Route
          path="/post/:id"
          element={<Postpage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
