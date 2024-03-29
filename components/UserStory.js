import React from "react";

function UserStory({ img, username }) {
  return (
    <div>
      <picture>
        <img
          className="h-14 w-14 rounded-full p-{1.5px} border-red-500 border-2 object-fit cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          src={img}
          alt=""
        />
      </picture>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default UserStory;
