import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("None");
  const [searchResults, setSearchResults] = useState([]);
  const [searchArray, setSearchArray] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/blogs")
  //     .then(response => {
  //       setBlogs(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  // const categoryHandler = (searchCategory) => {
  //   setSearchCategory(searchCategory);

  //   if (searchCategory !== "None") {
  //     const newBlogList = blogs.filter(
  //       (blog) => blog.category.toLowerCase() === searchCategory.toLowerCase()
  //     );
  //     setSearchArray(newBlogList);
  //     setSearchResults(newBlogList);
  //   } else {
  //     setSearchArray(blogs);
  //     setSearchResults(blogs);
  //   }
  // };

  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);

  //   if (searchTerm !== "") {
  //     const newBlogList = searchArray.filter((blog) => {
  //       return Object.values(blog)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setSearchResults(newBlogList);
  //   } else {
  //     setSearchResults(blogs);
  //   }
  // };

  // if (error) return <div>{error.message}</div>;
  // if (isLoading) return <div>Loading...</div>;

  return (
    <div>
     
    </div>
  );
};

export default Home;
