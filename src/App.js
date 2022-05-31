import { useState } from 'react';
import FormInputs from './components/FormInput';

function App() {
  const[values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    pasword: "",
    confirmPasword: "",
  })
  const inputs = [
    {id:1, name: "username" , type: "text", placeholder: "Username", errorMessage: "Username should be 3-16 characters" , label: "Username", pattern: "^[a-zA-Z0-9]{3,16}$", required: true},
    {id:2, name: "email" , type: "email", placeholder: "Email", errorMessage: "Email needs valid format" , label: "Email" , required: true},
    {id:3, name: "birthday" , type: "date", placeholder: "Birthday" , label: "Birthday" , required: true},
    {id:4, name: "password" , type: "password", placeholder: "Password", errorMessage: "Password should be 8-28 characters, include at least 1 letter, 1 number and 1 special character" ,label: "Password" , pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,28}$", required: true},
    {id:5, name: "confirmPassword" , type: "password", placeholder: "Confirm Password", errorMessage: "Passwords don't match" ,label: "Confirm Password" , pattern: values.password,  required: true},
  ]
  const handleSubmit = (e) =>{
    e.preventDefault()
  }     
  const onChange= (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInputs 
          key={input.id}
           {...input} 
           value={values[input.name]}
           onChange={onChange}/>
        ))}
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
