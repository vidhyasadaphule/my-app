import React from 'react'

export default function Alert(props) {

  const Capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }

  return (
  <div style={{height:"50px"}}>
         {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
          </div>}
  </div>
  )
}

// props.alert && all the statements written below under this statement are evaluated if the statement is true if it is false the further 
// statements are not executed
// if props.alert === null then do this the statement is showing 