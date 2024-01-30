import React, { useState } from 'react';

export default function Uppercase(props) {
  const [text, setText] = useState("");

  function UppercaseFunc() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function LowercaseFunc() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function onchangeFunc(event) {
    setText(event.target.value);
  }

  const reverseFunc = () => {
    let string = text;
    let b = string.split('').reverse().join('');
    let c = b.split(' ').reverse().join(' ');
    setText(c);
  };

  function copyText() {
    let textInsideField = document.getElementById('myBox');
    textInsideField.select();
    navigator.clipboard.writeText(textInsideField.value);
  }

  function handlePreview() {
    let preview = document.getElementById('preview'); 
    if (text === "") {
      preview.innerText = "Write something above to Preview !........";
    } else {
      preview.innerText = text;
    }
  }

  function clearPreview() {
    let preview = document.getElementById('preview'); 
    preview.innerText = "";
    setText('');
  }
  
  return (
    <>
      <div className="container">
         <div className="mb-3 my-3">
          <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
          <textarea className="form-control" value={text} onChange={onchangeFunc} id="myBox" rows="12"  style={{backgroundColor:"black",color:"white", fontFamily: "'Merriweather Sans', sans-serif"}}></textarea>
          <button className="btn btn-primary mx-1 my-4" onClick={UppercaseFunc}>UpperCase</button>
          <button className="btn btn-primary mx-1 my-4" onClick={LowercaseFunc}>LowerCase</button>
          <button className="btn btn-primary mx-1 my-4" onClick={reverseFunc}>Reverse</button>
          <button className="btn btn-primary mx-1 my-4" onClick={copyText}>Copy Text</button>
          <p className='my-1'>Word Count - {text.trim().split(/\s+/).filter(Boolean).length} Characters Count - {text.trim().length}</p>
        </div>
      </div>
      <div className="container" >
        <button className='btn btn-danger mx-4 my-1 ' onClick={handlePreview}>Preview</button>
        <button className='btn btn-danger' onClick={clearPreview}>Clear</button>
        <div className="mb-5 mt-2 border border-warning px-4 py-4" id="preview" style={{ fontFamily: "'Merriweather Sans', sans-serif" }}></div>
      </div>
    </>
  );
}
