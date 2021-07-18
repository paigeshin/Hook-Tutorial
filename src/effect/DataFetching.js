import React, { useState, useEffect } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/posts

const DataFetching = () => {
  const [id, setId] = useState();
  const [post, setPost] = useState([]);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button onClick={handleClick} type="button">
        Fetch Post
      </button>
      <ul>
        <div>{post.title}</div>
        {/* {post.map((post) => (
          <li key={post.id}><div>
          {post.title}</div></li>
        ))} */}
      </ul>
    </div>
  );
};

export default DataFetching;
