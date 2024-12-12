"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Heart, Send } from "lucide-react";
import Comment from "../../components/Comment";
import { ClipLoader } from "react-spinners";
function Pin() {
  const [pin, setPin] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [morePins, setMorePins] = useState([]);

  const { id } = useParams();
  const { data: session } = useSession();

  const fetchMorePins = async () => {
    const res = await axios.get(`/api/pins`);
    // Get 3 random pins from the response
    const allPins = res.data.pins;
    const randomPins = allPins
      .filter(pin => pin._id !== id) // Exclude current pin
      .sort(() => 0.5 - Math.random()) // Shuffle array
      .slice(0, 3); // Take first 3 items
    setMorePins(randomPins);
  }

  const fetchPin = async () => {
    const res = await axios.get(`/api/pins/${id}`);
    setPin(res.data.pin);

    const pinLiked = res.data.pin.likes.some(
      (element) => element.username === session?.user?.name
    );
    if (pinLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  useEffect(() => {
    fetchPin();
    fetchMorePins();
  }, [id]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {pin && pin?.image?.url ? (
        <div className="w-full my-16 px-4 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <Image
              src={pin?.image?.url}
              alt={pin?.title}
              width={500}
              height={500}
              className="rounded-xl cursor-pointer"
            />

            <div className="flex justify-between items-center">
              <span className="flex flex-col gap-2">
                <Heart
                  className={`${
                    isLiked
                      ? "bg-transparent text-red-600 fill-red-600 hover:text-white hover:fill-none"
                      : "bg-transparent hover:fill-red-600 hover:text-red-600"
                  } cursor-pointer`}
                />
                <span className="text-xs">{pin?.likes?.length} Likes</span>
              </span>
              <Link
                href={pin?.image?.url}
                target="_blank"
                className="bg-red-600 p-2 rounded-md text-white"
              >
                Download
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">
                {" "}
                {pin?.comment?.length ? pin.comment.length : 0} Comments
              </h3>
              {pin?.comment?.length > 0 ? (
                pin.comment.map((elements) => {
                  return (
                    <Comment
                      key={elements._id}
                      user={element.user}
                      comment={element.comment}
                      profileImage={element.profileImage}
                    />
                  );
                })
              ) : (
                <span>No Comments</span>
              )}
            </div>

            <div className="relative flex justify-start items-start w-full">
              <input
                type="text"
                placeholder="Comment"
                value={comment}
                className="bg-gray-100 p-3 rounded-xl w-full focus:outline-red-600 text-black"
                onChange={(e) => setComment(e.target.value)}
              />
              <Send className="absolute right-2 top-1/4 text-red-600"/>
            </div>

            <div className="">
              <h3 className="text-2xl mt-8 font-semibold">More Pins</h3>
              <div className="flex space-x-4 overflow-x-auto py-4">
                {
                  morePins && morePins.map(element => {
                    return(
                      <Link href={`/pins/${element._id}`} key={element._id}>
                        <Image src={element?.image?.url} alt={element.title} width={200} height={200} className="rounded-xl cursor-pointer "/>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen"><ClipLoader color="red" size={250} /></div>
      )}
    </div>
  );
}

export default Pin;
