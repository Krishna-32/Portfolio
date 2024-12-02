import Image from "next/image";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

export default function Home() {

  const gallery = [
    {
      _id: 1,
      title: "Image 1",
      imageUrl: "/1.jpg"
    },
    {
      _id: 2,
      title: "Image 2", 
      imageUrl: "/2.jpg"
    },
    {
      _id: 3,
      title: "Image 3",
      imageUrl: "/2.jpg"
    },
    {
      _id: 4,
      title: "Image 4",
      imageUrl: "/4.jpg"
    },
    {
      _id: 5,
      title: "Image 3",
      imageUrl: "/5.jpg"
    },
    {
      _id: 6,
      title: "Image 1",
      imageUrl: "/1.jpg"
    },
    {
      _id: 7,
      title: "Image 2", 
      imageUrl: "/2.jpg"
    },
    {
      _id: 8,
      title: "Image 3",
      imageUrl: "/5.jpg"
    },
    {
      _id: 9,
      title: "Image 3",
      imageUrl: "/5.jpg"
    },
    {
      _id: 10,
      title: "Image 4",
      imageUrl: "/4.jpg"
    }   
  ];

  return (
    <div className="max-w-full m-4">
      {!gallery || gallery.length <= 0 ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#fff" size={120} />
        </div>
      ) : gallery.length > 0 ? (
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 [&>div]:mb-4">
          {gallery.map(items => (
            <Link 
              href={`/pin/${items._id}`}
              key={items._id}
              className="cursor-pointer hover:opacity-80"
            >
              <Image 
                className="rounded-lg w-full h-auto object-cover mb-4" 
                src={items?.imageUrl} 
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
