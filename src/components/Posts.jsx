import { useState } from "react";
import dataBlog from "./Data";

function Posts() {
  const [like, setLike] = useState(dataBlog.map((item) => item.likes));
  // console.log(like);

  const handleLike = (index) => {
    const newLike = [...like];
    newLike[index] = newLike[index] + 1;
    setLike(newLike);
  };

  const handleDislike = (index) => {
    if (like[index] > 0) {
      const newDislike = [...like];
      newDislike[index] = newDislike[index] - 1;
      setLike(newDislike);
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {dataBlog.map((item, index) => {
          return (
            <div className="post-item" key={index}>
              <div className="post-header">
                <h2>{item.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{like[index]}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => handleLike(index)}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => handleDislike(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
