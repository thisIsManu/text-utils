import React, { useState } from "react";
import { Tooltip  } from "bootstrap";
export default function TextForm({theme}) {
    const [text, setText] = useState("");
    const words = text.split(" ").filter(i => i!=="" && i!==" ").length;

    const capitalize  = () => {
      let capitalizedText = "";
      let arr =  text.split(" ").map(i => {return i.charAt(0).toUpperCase()+i.substr(1)}); 
      arr.forEach(i => capitalizedText=capitalizedText+" "+i);
      setText(capitalizedText.trim())
    }

    const buttonClass = ` my-3 mx-1 btn btn-${theme==='dark'?'primary':'dark'}`;
  return (
    <div className="container" style={{color: `${theme === 'light' ? "black" : "white"}`}}>
    <div class="mb-3">
      <h1>Enter the text to be Analyzed.</h1>
      <textarea
        value={text}
        style = {theme === "dark" ? {    backgroundColor: "#230028",
          color: "white"} : {}}
        placeholder="Enter the Text"
        onChange={(e)=> setText(e.target.value)}
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
      ></textarea>
     <button type="button" className={buttonClass} onClick={e => {setText(text.toUpperCase())}}>Transform to UpperCase</button>
     <button type="button" className={buttonClass} onClick={e => {setText(text.toLowerCase())}}>Transform to LowerCase</button>  
     <button type="button" className={buttonClass} onClick={capitalize}>Captailze</button>  
     <button type="button" className={buttonClass} onClick={e => {setText("")}}>Clear Text</button>  

    </div>
    <div className="my-2">
      <h3>Text Analysis</h3>
      <p className="mx-1">Number Of Word : {text.split(" ").filter(i => i!=="" && i!==" ").length}</p>
      <p className="mx-1">Number Of Characters : {text.split("").filter(i => i!=="").length}</p>
      <p className="mx-1">Reading Time: {.008 * words} mins or {.008 * words * 60 } secs</p>
      <h3 className=" mx-1 my-3">Text Preview</h3>
        <div className="card" style={{maxHeight: '500px', overflowY: "scroll", backgroundColor: `${theme==="dark" ? "#7e777e" : ''}`}} >
          <div className="card-body">
            {text}
          </div>
        </div>
    </div>
    </div>
  );
}
