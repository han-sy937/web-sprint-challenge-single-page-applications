import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import PizzaList from './component/PizzaList'
import Form from './component/Form'
import Navigation from './component/Navigation'

const initialForm = {
  choice: "",
  olives: false,
  pineapples: false,
  cheese: false,
  pepper: false,
  instructions: "",
}

const formSchema = yup.object().shape({
  choice: yup
  .string()
  .oneOf(['small', 'medium', 'large', 'extra-large'], "Toppings is required")
  .required("Toppings is required") 
})

const App = () => {
  const [form, setForm] = useState(initialForm)
  const [pizza, setPizza] = useState([])
  const [disable, setDisable] = useState(true)
  const [errors, setErrors] = useState(initialForm)
  const history = useHistory()

  useEffect(() => {
    formSchema.isValid(form)
      .then(valid => setDisable(!valid))
  }, [form])

  const validateForm = (e) => {
    yup
      .reach(formSchema, 'choice')
      .validate(e.target.value)
      .then(() => setErrors({...errors, [e.target.choice]: ''}))
      .catch(err => setErrors({...errors, [e.target.choice]: err.errors}))
  }

  const handleChange = (e) => {
    e.persist()
    e.target.type === 'checkbox' ? 
    setForm({...form, [e.target.name]: e.target.checked })
    : setForm({...form, [e.target.name]: e.target.value });
    validateForm(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://reqres.in/api/users', form)
    .then(res => {
      console.log(res.data)
      setPizza([res.data, ...pizza]);
      setForm(initialForm)
      history.push("/");
    })
    .catch((err => {
      console.log(err)
    })) 
  }

  return (
    <>
      <Navigation />
        {errors.choice && <p>{errors.choice}</p>}
      <Switch>
        <Route path="/Form">
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} disable={disable} errors={errors} />
        </Route>
        <Route path="/">
          <PizzaList pizza={pizza} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
