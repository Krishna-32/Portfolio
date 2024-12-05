"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

function UploadPin() {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(file);
      setImagePreview(reader.result);
    };
  };

  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !tags || !image) {
      toast.error("Please fill in all fields");
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);

    if(session){
     const user = session?.user?.name;
     formData.append("user", user);
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/pins", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setImage("");
      setImagePreview("");
      setTitle("");
      setDescription("");
      setTags("");
      if(response.status === 201){
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while uploading pin, please try again");
    }


    return <div>UploadPin</div>;
  };
}
export default UploadPin;
