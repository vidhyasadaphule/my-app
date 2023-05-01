import React,{useState} from 'react'
//shortcut for react import is rfc
//here usestate is a hook




export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick = () =>{
        console.log("uppercase was clicked "); 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase ',"success");
    }
    const handleOnChange = (event) =>{
        console.log("Onchange is evoked"); 
        setText(event.target.value);

    }
    const handleLowClick = (event) =>{
        console.log("lowercase button clicked!");
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert('converted to Lowercase ',"success");
    }
    const clearText = (event) =>{
        setText(" ");
        props.showAlert('Text is removed ',"success");

    }
    const copyText =()=>{
        // var text = document.getElementById("mybox");
        // text.select();
        // console.log('copy text');
        navigator.clipboard.writeText(text);
        props.showAlert('Text is Copied  ',"success");
    }

     
    // setText("please enter a dummy text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading} </h1>
        <div className="mb-3">
        <textarea  id="mybox" className='form-control' rows="10"  value={text}  onChange={handleOnChange}  
        style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1"  onClick={handleUpClick} >convert to uppercase </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1"  onClick={handleLowClick}>convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={clearText}> Clear Text </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={copyText} id="mytext"> Copy Text </button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1> your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} to read</p>
        <p>preview</p>
        <p>{text.length>0?text:'Enter something in the textbox to preview here'}</p>
    </div>
    </>
  )
}

