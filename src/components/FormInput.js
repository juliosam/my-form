import { useState } from "react";

const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);
  const{label, errorMessage, onChange , id , ...inputProps} = props

  const handleFocus = ()=>{setFocused(true)}
  return ( 
      <div className="form-input">
          <label>{label}</label> 
          <input 
          {...inputProps} 
          onChange={onChange} 
          onBlur={handleFocus}
          onFocus={()=> inputProps.name === "confirmPassword" && setFocused(true)}
           focused={focused.toString()}/>
          <span>{errorMessage}</span>  
      </div>
    );
}
 
export default FormInputs;