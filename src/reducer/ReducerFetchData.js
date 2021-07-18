import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const ReducerFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError(error);
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error.message : null}
    </div>
  );
};

export default ReducerFetchData;
