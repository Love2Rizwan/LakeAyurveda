import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import BlogList from "../../Components/BlogList/BlogList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("None");
  const [searchResults, setSearchResults] = useState([]);
  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/blogs")
      .then(response => {
        setBlogs(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const categoryHandler = (searchCategory) => {
    setSearchCategory(searchCategory);

    if (searchCategory !== "None") {
      const newBlogList = blogs.filter(
        (blog) => blog.category.toLowerCase() === searchCategory.toLowerCase()
      );
      setSearchArray(newBlogList);
      setSearchResults(newBlogList);
    } else {
      setSearchArray(blogs);
      setSearchResults(blogs);
    }
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      const newBlogList = searchArray.filter((blog) => {
        return Object.values(blog)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newBlogList);
    } else {
      setSearchResults(blogs);
    }
  };

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
    <>
    
    </>
      <div className="w-4/5 md:w-9/12 mx-auto mt-10"></div>

      <BlogList
        blogs={
          searchTerm.length < 1 && searchCategory === "None"
            ? blogs
            : searchResults
        }
        searchTerm={searchTerm}
        searchCategory={searchCategory}
        searchHandler={searchHandler}
        categoryHandler={categoryHandler}
      />
    </div>
  );
};

export default Home;
