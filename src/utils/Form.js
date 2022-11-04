import React from 'react'

const Form = (props) => {
    return ( 
        <div className='field'>
            <label key={props.key} htmlFor={props.htmlFor}>{props.label}</label>
            <input pattern={props.pattern} id={props.id} type={props.type} placeholder={props.placeholder} />
            <div>{props.errorMsg}</div>
        </div>
     );
}
 
export default Form;
