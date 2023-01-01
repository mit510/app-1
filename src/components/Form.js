import React, {useState} from 'react'
export default function Form(props) {
    const handleUpClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to Uppercase","success");
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);

    }
    const cleartext=()=>{
      let newText = '';
      setText(newText)
      props.showAlert("Text is Clear","success")
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" 
        rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}}> 
        </textarea>
        </div>
        <button className="btn btn-primary" onClick= 
        {handleUpClick}>Covert to 
         Upper</button>
         <button className="btn btn-primary mx-3" onClick= 
          {handleDownClick}>Covert to 
         lower</button>
         <button className="btn btn-primary" onClick= 
          {cleartext}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>Words: {text.split(" ").length} <br/> Characters: {text.length} <br/> Minimum time for reading :{0.008*text.split(" ").length}</p>
    </div>
    </>
     
  )
}
