import React, { useState } from "react";
import Loader from "../components/Loader";

// Function to post the URL to the Flask backend and handle the file download
const postJobUrlAndDownloadFile = async (url: string) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    // Get the file blob from the response
    const blob = await response.blob();
    // Create a download URL from the blob
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "job_details.docx"; // Set the file name for download
    document.body.appendChild(a);
    a.click(); // Trigger the download
    a.remove(); // Clean up the link after downloading
    window.URL.revokeObjectURL(downloadUrl); // Clean up the blob URL
  } catch (error) {
    console.error("Error posting URL:", error);
    if (error instanceof Error) {
      return { error: error.message }; // Return error message if available
    }
    return { error: "An unknown error occurred." };
  }
};

const Home: React.FC = () => {
  const [url, setUrl] = useState(""); // State to store the input URL
  const [error, setError] = useState<string | null>(null); // State to store validation error
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false); // State for mini-player visibility

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null); // Clear error when typing
  };

  // Function to handle the click event of the 'Generate' button
  const handleGenerate = async () => {
    // URL validation
    if (!url) {
      setError("Please enter a LinkedIn job URL."); // Validation: URL is required
    } else if (!url.includes("linkedin.com/jobs/view/")) {
      setError("Please enter a valid LinkedIn job URL."); // Validation: Must be a LinkedIn job URL
    } else {
      setLoading(true); // Start loading
      setError(null); // Clear any previous errors
      await postJobUrlAndDownloadFile(url); // Post URL and trigger file download
      setLoading(false); // End loading
    }
  };

  // Function to toggle the mini-player
  const handleMiniPlayerToggle = () => {
    setIsMiniPlayerOpen(!isMiniPlayerOpen);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center gap-10 md:gap-20 bg-[#1e1a1a] overflow-hidden relative">
      <div className="pt-10">
        <span className="text-[#0a66c2] lg:text-6xl md:text-5xl text-2xl">
          LinkedIn Job Details Extractor
        </span>
      </div>

      <div className="flex flex-col items-center gap-8 md:gap-20 justify-center">
        <input
          required
          className="bg-[#f4f2ee] h-[2rem] md:h-[3rem] w-[15rem] md:w-[30rem] lg:w-[40rem] rounded-full text-center text-sm"
          type="text"
          placeholder="Paste link here"
          value={url}
          onChange={handleInputChange} // Track input changes
        />

        <button
          className="bg-[#c8322d] rounded-full h-[2rem] md:h-[3rem] w-[8rem] md:w-[15rem] text-md md:text-xl"
          onClick={handleGenerate} // Handle button click
          disabled={loading} // Disable button while loading
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {/* Conditional Rendering for Error Messages */}
        {error && <span className="text-red-500">{error}</span>}
        {loading && <Loader />}
      </div>

      <span
        className="absolute bottom-10 text-red-500 text-sm cursor-pointer"
        onClick={handleMiniPlayerToggle} // Toggle the mini-player on click
      >
        {isMiniPlayerOpen ? "✖" : <u className="t">How to use?</u>} {/* Change text based on state */}
      </span>

      {/* Mini Player for Video */}
      {isMiniPlayerOpen && (
        <div className="fixed bottom-16 rounded-lg shadow-lg p-2">
          <video controls className="w-72 h-auto" src="/video.mp4" />
          <button
            className="absolute top-2 right-2 text-black"
            onClick={handleMiniPlayerToggle}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
