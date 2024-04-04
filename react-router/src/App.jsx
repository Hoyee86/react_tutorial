import { Route, Routes } from "react-router-dom"
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Missing from "./Missing"
import Nav from "./Nav"
import NewPost from "./NewPost"
import Postpage from "./PostPage"



function App() {

  return (
    <div className="App">
      <Header title="DLT Blogs" />
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<NewPost/>} />
      <Route path="/post/:id" element={<Postpage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Missing/>}/>
      </Routes>
      <Footer />
    
    </div>
  )
}

export default App
