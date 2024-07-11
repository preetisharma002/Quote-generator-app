import React from "react";
import { useState } from "react";
import "./random.css";

const quotes = [
  {
    image: "/image.png",
    text: "The greatest glory in living lies not in never falling.",
    author: "~Nelson Mandela",
  },
  {
    image: "/Theodore.jpeg",
    text: "Believe you can and you're halfway there.",
    author: "~Theodore Roosevelt",
  },
  {
    image: "/steve-jobs.jpeg",
    text: "The only way to do great work is to love what you do.",
    author: "~Steve Jobs",
  },
  {
    image: "/robert-forst.jpeg",
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "~Robert Frost",
  },
  {
    image: "/aristotle.jpeg",
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "~ Aristotle",
  },
  {
    image: "/john-lennon.jpeg",
    text: "Life is what happens when you're busy making other plans",
    author: "~John Lennon",
  },

  {
    image: "/william-folk.jpeg",
    text: "It may be bad, but it's the only way you can do anything really good.",
    author: "~William Faulkner ",
  },
];

const Random = () => {
  const [quote, setquote] = useState(quotes[0]);

  const quoteGenerator = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setquote(quotes[randomQuote]);
  };
  return (
    <>
      <div className="main-container flex items-center justify-center">
        <div className="head-container flex flex-col gap-3 justify-center items-center capitalize p-[80px]">
          <h1 className="text-2xl font-bold">
            QUOTE <span>GENERATOR</span>
          </h1>
          <p className="text-[2.5em] font-light">generate quotes randomly</p>
        </div>
      </div>
      <div className="quote-head flex items-center justify-center flex-col gap-7">
        <div className="quote-container ">
          <img src={quote.image} alt={quote.author} className="quote-image" />
          <p className="font-bold text-[1.2em] capitalize">" {quote.text} "</p>
          <p className="italic">{quote.author}</p>
        </div>
        <div className="button-content flex items-center justify-center p-6 ">
          <button
            className="bg-black text-white p-3 px-6 text-1xl"
            onClick={quoteGenerator}
          >
            GENERATE QUOTE
          </button>
        </div>
      </div>
      <p className="footer fixed bottom-0 w-full text-sm text-center p-1 opacity-50">
        preeti@2024
      </p>
    </>
  );
};

export default Random;
