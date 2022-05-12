import React, {useState} from 'react'

export default function Text(props) {
    const handlup = () =>{
        let newtext=texx.toUpperCase();
        setText(newtext);
    }
    const handllp = () =>{
      let newtext=texx.toLowerCase();
      setText(newtext);
    }
    const handlon = (event) => {
        setText(event.target.value);
    }

    const handlcl = () => {
      setText('');
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.texx = texx`  `;
      window.speechSynthesis.speak(msg);
    }

    const handlcopy = () => {
      var text=document.getElementById("mytext");
      text.select();
      navigator.clipboard.writeText(text.value)
    }

    const handlrmv = () =>{
      let newtext=texx.split(/[ ]+/);
      setText(newtext.join(" "));
    }
  const capitalize = ()=>{
    let words = texx.split(" ")
   let uppercaseword = ''
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}
const[texx, setText] = useState('');

      return (
    <div className="container">
<br/>
  <div className="form-row">
    <div className={`col text-${props.mode==='light'?'black':'white'} `}><h5> {props.fn} </h5>
      <input type="text" value={texx}   onChange={handlon}  className="form-control" placeholder="Full name"/>
    </div>
    <div className="col"><h5>{props.ln}</h5>
      <input type="text" value={texx.toUpperCase()}  className="form-control" placeholder="upper case"/>
    </div>
    <div className="col"><h5>{props.ln}</h5>
      <input type="text" value={texx.toLowerCase()}   className="form-control" placeholder="lower case"/>
    </div>
  <br/>
  </div>
  <div className="container">
  <table className="table-light">
    <tr>
      <th scope="col"> <button type="button" onClick={handlup} className={`btn btn-${props.mode==='light'?'dark':'secondary'}`}>convert to upper case</button></th>
      <th scope="col">  <button type="button" onClick={handllp} className={`btn mx-2 btn-${props.mode==='light'?'dark':'secondary'}`}>convert to lower case</button></th>

      <th scope="col">
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
          <label className={`btn btn-${props.mode==='light'?'dark':'secondary'}`} onClick={handlcl} htmlFor="btnradio1">Clear</label>

          <input type="radio" className="btn-check" onClick={capitalize} name="btnradio" id="btnradio2" autocomplete="off"/>
          <label className={`btn  btn-${props.mode==='light'?'dark':'secondary'}`} htmlFor="btnradio2">Capitalize</label>

          <input type="radio" className="btn-check" onClick={handlrmv} name="btnradio" id="btnradio3"  autocomplete="off"/>
          <label className={`btn  btn-${props.mode==='light'?'dark':'secondary'}`}   htmlFor="btnradio3">Remove space</label>
        </div>
      </th> 
      <th scope="col">  <div className={`alert alert-${props.mode==='light'?'dark':'dark'} mx-3`} >characters ues is :-  {texx.length}</div></th>
      <th scope="col">  <div className="alert alert-dark mx-2" >word ues is :-  {texx.split(' ').length-1}</div></th>
    </tr>
  </table>
  </div>
  <br/>
  
  <div className={`col form-group text-${props.mode==='light'?'black':'white'} `}>
    <label htmlFor="exampleFormControlTextarea1"><h5>{props.textarea}</h5></label>
    <textarea  placeholder="Enter text "  className="form-control" style={{backgroundColor : props.mode==='light'?'dark':'secondary' ,color : props.mode==='light'?'dark':'secondary' }}  id ='mytext' rows="3"></textarea>
  </div>
  <div className="container"><br/>
  <button type="button" className={`btn btn-${props.mode==='light'?'dark':'secondary'}`} onClick={handlcopy} >copy text</button>
<button type="submit" onClick={speak} className={`btn mx-2 btn-${props.mode==='light'?'dark':'secondary'}`}>Speak</button>

  </div>

{/* It is targetted by the button 'speak': */}

<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
  )
}
