"use client";

import Image from "next/image";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {

  const [pins, setPins] = useState([]);

  const getPins = async () => {
    const res = await axios.get(`/api/pins`);
    setPins(res.data.pins);
  }

  useEffect(() => {
    getPins();
  }, []);

  return (
    <div className="max-w-full m-4">
      {!pins || pins.length <= 0 ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#fff" size={120} />
        </div>
      ) : pins.length > 0 ? (
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 [&>div]:mb-4">
          {pins.map(items => (
            <Link 
              href={`/pins/${items._id}`}
              key={items._id}
              className="cursor-pointer hover:opacity-80"
            >
              <Image 
                className="rounded-lg w-full h-auto object-cover mb-4" 
                src={items?.image?.url} 
                alt={items.title} 
                width={500}
                height={500}
              />
            </Link>
          ))}
        </div>
      ) : <div className="flex justify-center items-center h-screen text-2xl font-bold text-gray-500">No Results Found</div>}
    </div>
  );
}
