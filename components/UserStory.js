import React from "react";
import Image from "next/image";

function UserStory({ img, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-{1.5px} border-red-500 border-2 object-fit cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={Image}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default UserStory;
