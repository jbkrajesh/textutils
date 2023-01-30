import React,{useState}from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here");
    const handleUpClick=()=>{
       // console.log("Uppercase Was clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowerCase","success");
    }
    const clearText=()=>{
        
        setText("")
        
    }
    const handelOnChange=(event)=>{
        //console.log("Handel On change")
        setText(event.target.value)
    }
        const handelCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard","success");
        }
        const handelExtraSpace=()=>{
            let newText=text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Removed extra space","success");

        }

  return (
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
        
    
        <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>

<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to lower case</button>
<button className="btn btn-primary mx-2" onClick={clearText}>clearText</button>
<button className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
<button className="btn btn-primary my-2" onClick={handelExtraSpace}>Remove Extra Space</button>


    </div>
    <div className="container my-2"></div>
    <h1>Your Text Summery</h1>
    <p>No of word is  {text.split(" ").length} No of character is  {text.length}</p>
    <p>{0.008 *text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
  )
}
