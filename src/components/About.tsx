"use client";

import { useState } from "react";
import SearchComp from "./Search";
import { Search } from "lucide-react";

export default function About() {
  const [searched, setSearched] = useState("");

  const handleSearch = () => {};

  return (
    <div className="bg-white flex flex-col justify-center p-4 w-full gap-10">
      <h2 className="text-4xl font-bold text-center mt-10">
        Ask anything, find what <br />
        <span className="font-[cursive]">
          <i>people recommend</i>
        </span>
      </h2>
      <div className="flex flex-col justify-center gap-8 w-full">
        <div className="flex items-center justify-center mt-4 w-full px-20">
          <input
            type="text"
            value={searched}
            onChange={(e: any) => {
              setSearched(e.target.value);
            }}
            className="w-3/4 p-2 px-4 border border-gray-300 rounded-l-full outline-none focus:none"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-blue-500 text-white rounded-r-full border"
          >
            <Search />
          </button>
        </div>
        <SearchComp setSearched={setSearched} />
      </div>

      <div className="p-16 flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-4">
          About{" "}
          <span className="font-[cursive]">
            <i>us</i>
          </span>
        </h2>
        <img />
        <p>
          hi! sharad here. we are the founders of curations. if you're someone
          who loves discovering hidden gems through people's recommendations,
          creating lists of your favorite things, and sharing them with the
          world (while keeping it all ✨aesthetic✨), you're in the right place.
          curations started as a way to capture and share what truly matters to
          us, beyond fleeting trends. it's a space to collect, discover, and
          connect over the things that make us, us. we hope you have as much fun
          using it as we have building it :)
        </p>
        <img />
        <div className="flex flex-col items-start justify-center mt-4">
          <p>For any feedback or inquiries,</p>
          <p>reach out at</p>
          <p>poddarsharad460@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
