import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
      alert('Login Successful!');
    },
    validate: values => {
      let errors = {};
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!values.password) errors.password = 'Field Required';
      if (!values.email.match(mailformat)) errors.email = "Invalid email address!";
      if (!values.email) errors.email = 'Field Required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}> 
        <div>Email:</div>
        <input id='emailField' name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id='emailError' style={{ color: 'red' }}>{formik.errors.email}</div> : null}
        
        <div>Password:</div>
        <input id='pswField' name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id='pswError' style={{ color: 'red' }}>{formik.errors.password}</div>: null}
        

        <button id='submitBtn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
