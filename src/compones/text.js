import React, {useState} from 'react'

export default function Text(props) {
    const handlup = () =>{
        let newtext=texx.toUpperCase();
        setText(newtext);
    }
    const handlon = (event) => {
        setText(event.target.value)
        }

const[texx, setText] = useState('');

      return (
    <div className="container">
<br/>
  <div className="form-row">
    <div className="col"><h5>{props.fn}</h5>
      <input type="text"  onChange={handlon} className="form-control" placeholder="First name"/>
    </div>
    <div className="col"><h5>{props.ln}</h5>
      <input type="text" value={texx}   className="form-control" placeholder="Last name"/>
    </div>
  <br/>
  </div>
  <div className="container">
  <button type="button" onClick={handlup} className="btn btn-info">convert to upper case</button>
  </div>
  <br/>
  
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1"><h5>{props.textarea}</h5></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="container"><br/>
  <button type="button" className="btn btn-info">convert to lower case</button>
  </div>

    </div>
  )
}
