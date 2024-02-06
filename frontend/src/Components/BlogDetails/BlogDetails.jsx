import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}`);
        setBlog(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const imgUrl = "http://localhost:1337";

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/blogs/${id}`)
      .then(() => {
        console.log("Blog deleted successfully!");
        navigate("/"); // Using navigate to redirect instead of history.push
      })
      .catch(error => {
        console.error('Error deleting blog:', error);
      });
  };

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    let localLiked = liked;
    localLiked = !localLiked;
    setLiked(localLiked);
    if (localLiked) {
      console.log("liked");
    } else {
      console.log("unliked");
    }
  };

  return (
    <div className="w-4/5 md:w-7/12 mx-auto md:mt-10">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {blog && (
        <div>
          <h2 className="py-2 blog-detail-title">{blog.title}</h2>
          <p className="text-sub-title mb-6">Written by {blog.author}</p>
          <div>
            <img
              className="w-full object-cover h-40 md:h-4/5 mb-6 rounded"
              src={imgUrl + blog.blogImage.url}
              alt={blog.title}
            />
            <p className="text-content text-justify">{blog.body}</p>
          </div>
          <div className="my-4 flex space-x-4">
            <div
              className="text-red-500 hover:text-black"
              onClick={handleDelete}
            >
              Delete
            </div>
            <div className="" onClick={toggleLike}>
              {liked === false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* SVG for unliked icon */}
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-red-500 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* SVG for liked icon */}
                </svg>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
