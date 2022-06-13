import React, { useState } from "react";
import "./App.css"
import LinkResult from "./LinkResult";
import Shortener from "./Shortener";

const HomePage = () => {
    
    const [longUrl, setLongUrl] = useState("")
    const [shortenLink, setShortenLink] = useState("")
    const [urlCode, setUrlCode] = useState("")

  return (
    <div className="front-page">
      <Shortener setLongUrl={setLongUrl} longUrl={longUrl} setShortenLink={setShortenLink}
       setUrlCode={setUrlCode}/>
      <LinkResult longUrl={longUrl} shortenLink={shortenLink} urlCode={urlCode}/>
    </div>
  )
}

export default HomePage