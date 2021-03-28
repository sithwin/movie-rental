import React from "react";

const Like = (props) => {
  const shape = props.liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <div>
      <i
        className={shape}
        aria-hidden="true"
        onClick={props.onLike}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default Like;
