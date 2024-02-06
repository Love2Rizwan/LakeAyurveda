// App.js

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home"; // Correct import path
import AddBlog from "./Components/AddBlog/AddBlog";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/react-blog" element={<Home/>}/>
          <Route path="/blogs/add" element={<AddBlog/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
