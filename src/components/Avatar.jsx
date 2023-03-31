import React from "react";
function Avatar(props) {
  return (
    <div>
      <img className="circle-img" src={props.img} alt="avatat_image" />
    </div>
  );
}
export default Avatar;
