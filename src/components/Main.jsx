"use client";

import { AiFillThunderbolt } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const Main = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shorturl }),
    });

    const data = await res.json();

    // 👇 mismatch case: shorturl exists but URL is different
    if (!data.success) {
      setGenerated("url already exists");
      return;
    }

    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
    setUrl("");
    setShortUrl("");
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="relative z-20 flex flex-col items-center px-4 py-16 w-full">
      
      {/* Heading */}
      <div className="flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Shorten Your Loooong Links
        </h1>
        <p className="text-lg sm:text-xl mt-6 text-gray-300">
          Create memorable, trackable, and branded short links in seconds.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-6 bg-[#1e2639] rounded-2xl drop-shadow-xl 
                      w-full max-w-xl mt-50 p-6 sm:p-8">

        <div className="flex flex-col gap-2">
          <span className="text-[#99A3B8] font-bold">
            Enter Original URL
          </span>
          <input
            type="text"
            className="bg-[#0f172a] rounded-md border border-[#30394E] h-12 px-3 text-base outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="www.example.com/very-long-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#99A3B8] font-bold">
            Enter Tag
          </span>
          <input
            type="text"
            className="bg-[#0f172a] rounded-md border border-[#30394E] h-12 px-3 text-base outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="skibi.di/your-tag"
            value={shorturl}
            onChange={(e) => setShortUrl(e.target.value)}
          />
        </div>

        <button
          onClick={generate}
          className="flex items-center justify-center gap-2 font-bold py-4 bg-[#6366f1] hover:bg-indigo-500 transition rounded-lg"
        >
          <AiFillThunderbolt />
          Shorten URL
        </button>

        {generated && (
          <code className="text-center text-indigo-400 break-all">
            Your Link:{" "}
            <Link
              href={generated}
              target="_blank"
              className="underline hover:text-indigo-300"
            >
              {generated}
            </Link>
          </code>
        )}
      </div>
    </div>
  );
};

export default Main;

