import React, { useState } from "react";
import Loader from "../components/Loader";

// Function to post the URL to the Flask backend
const postJobUrl = async (url: string) => {
  try {
    const response = await fetch("http://localhost:5000/", {
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

    const data = await response.json();
    return data; // Return the response data
  } catch (error) {
    console.error("Error posting URL:", error);
    if (error instanceof Error) {
      return { error: error.message }; // Safe to access message
    }
    return { error: "An unknown error occurred." }; // Fallback for other types of errors
  }
};

const Home: React.FC = () => {
  const [url, setUrl] = useState(""); // State to store the input URL
  const [error, setError] = useState<string | null>(null); // State to store validation error
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State for success message
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [result, setResult] = useState<any>(null); // State to store the API response
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false); // State for mini-player visibility

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null); // Clear error when typing
    setSuccessMessage(null); // Clear success message when typing
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
      const apiResult = await postJobUrl(url); // Post URL and await response
      setLoading(false); // End loading

      if (apiResult.error) {
        setError(apiResult.error); // Display error if it exists
        setSuccessMessage(null); // Clear success message
        setResult(null); // Clear result on error
      } else {
        setSuccessMessage(apiResult.message); // Set success message from response
        setResult(apiResult); // Store the API response
        setError(null); // Clear error message
      }
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
        >
          Generate
        </button>

        {/* Conditional Rendering for Loading, Error, and Success Messages */}
        {loading ? (
          <Loader />
        ) : error ? (
          <span className="text-red-500">{error}</span>
        ) : successMessage ? (
          <div className="flex flex-col gap-4 items-center">
            <span className="text-green-500">{successMessage}</span>
            <div className="flex flex-col gap-2 items-center">
              {result && (
                <span className="text-gray-500 text-sm">
                  Company: {result.company_name}
                </span>
              )}
              {result && (
                <span className="text-gray-500 text-sm">
                  Job: {result.job_title}
                </span>
              )}
              {result && (
                <span className="text-gray-500 text-sm">
                  Location: {result.location}
                </span>
              )}
            </div>
          </div>
        ) : null}
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
