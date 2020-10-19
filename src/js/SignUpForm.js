import React, { Component } from 'react';
import shortid from 'shortid';
import styled, { css } from 'styled-components';

// import PropTypes from 'prop-types';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
  message: '',
};

const Form = styled.form`
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,255,0.3);
  box-shadow: 0 0 1px rgba(0,0,255,0.3);
  :not(:last-child){
    margin-bottom: 15px;
  }
`;

const Box = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content:space-between;
  align-items: center;

  ${props => props.radio && css`
    align-items: baseline;
  `}
`;

const InputText = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0,0,255,0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0,0,255,0.3);
  transition: all 0.3s linear;
  padding: 5px;
  border-radius: 5px;

  :focus{
    box-shadow: 0 0 5px rgba(0,0,255,0.5);
    border-bottom: 1px solid rgba(0,0,255,1);
  }

  ::placeholder{
    font-family:sans-serif;
  }

  ${props => props.name === 'message' && css`
    width: 100%;
    height: 100px;
    resize: none;
  `}
`;

const Checkbox = styled.input`
  display: none;
`;


const Label = styled.label`
  font-size: 18px;
  text-decoration: none;
  color: black;
  position: relative;


  ${props => props.checkbox && css`
    padding-right: 30px;
    width: 100%;
    :before{
      content: '';
      display: block;
      position:absolute;
      top: 0;
      right: 0;
      width: 14px;
      height: 14px;
      border-radius: 5px;
      border: 1px solid rgba(0,0,255,0.3);
      box-shadow: 0 0 1px rgba(0,0,255,0.3);
      cursor: pointer;
    }
  `}

  ${props => props.checked && css`
    :after{
      content: '';
      display: block;
      position:absolute;
      top: 2px;
      right: 2px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: blue;
      border: 1px solid rgba(0,0,255,0.3);
      box-shadow: 0 0 1px rgba(0,0,255,0.3);
      cursor: pointer;
    }
  `}
`;

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid rgba(0,0,255,0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0,0,255,0.3);
  transition: all 0.3s linear;
  background-color: #FFF;
  padding: 5px;
  width: 100%;
  font-size: 20px;

  :hover:not(:disabled){
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0,0,255,0.5);
    border: 1px solid rgba(0,0,255,1);
  }
`;

class SignUpForm extends Component {
  static defaultProps = {};

  id = {
    login: shortid.generate(),
    email: shortid.generate(),
    password: shortid.generate(),
    agreed: shortid.generate(),
    genderMale: shortid.generate(),
    genderFemale: shortid.generate(),
    age: shortid.generate(),
    message: shortid.generate(),
  }

  state = { ...INITIAL_STATE };

  changeHandler = event => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value })
  }

  submitHandler = event => {
    event.preventDefault();
    const { login, email, password, agreed, gender, age, message } = this.state;
    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
      Agreed: ${agreed}
      Gender: ${gender}
      Age: ${age}
      Message: ${message}
    `);
    // this.props.onSubmit({ ...this.state });
    this.reset();
  }
  
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age, message } = this.state;

    return (
      <Form onSubmit={this.submitHandler}>
        <Box>
          <Label htmlFor={ this.id.login }>Name</Label>
          <InputText
            type="text"
            placeholder="Enter login"
            name="login"
            value={ login }
            id={ this.id.login }
            onChange={this.changeHandler}>          
          </InputText>
        </Box>

        <Box>
          <Label htmlFor={ this.id.email }>Email</Label>
          <InputText
            type="text"
            placeholder="Enter Email"
            name="email"
            value={ email }
            id={ this.id.email }
            onChange={ this.changeHandler }>
          </InputText>
        </Box>

        <Box>
          <Label htmlFor={ this.id.password }>Password</Label>
          <InputText
            type="password"
            placeholder="Enter password"
            name="password"
            value={ password }
            id={ this.id.password }
            onChange={ this.changeHandler }>
          </InputText>
        </Box>

        <Box radio>
          <Label as='div'>Choose your gender</Label>
          <div>
            <input
              type="radio"
              checked={ gender === Gender.MALE }
              value={ Gender.MALE }
              name="gender"
              id={ this.id.genderMale }
              onChange={ this.changeHandler }>
            </input>
            <Label htmlFor={this.id.genderMale}>{Gender.MALE}</Label>
            
            <input
              type="radio"
              checked={ gender === Gender.FEMALE }
              value={ Gender.FEMALE }
              name="gender"
              id={ this.id.genderFemale }
              onChange={ this.changeHandler }>
            </input>
            <Label htmlFor={ this.id.genderFemale }>{Gender.FEMALE}</Label>
          </div>
          
        </Box>

        <Box>
          <Label htmlFor={ this.id.age }>Choose your age</Label>
          <select
            name="age"
            value={ age }
            onChange={ this.changeHandler }
            id={ this.id.age }>            
            <option value="" disabled> ... </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>          
        </Box>

        <Box>
          <InputText
            as='textarea'
            name='message'
            value={ message }
            onChange={ this.changeHandler }
            id={ this.id.message } 
            placeholder='Enter your message'>             
          </InputText>
        </Box>

        <Box>          
          <Label checkbox checked={ this.state.agreed } htmlFor={this.id.agreed}>Agree to terms</Label>
          <Checkbox
            type="checkbox"
            checked={ agreed }
            name="agreed"
            id={ this.id.agreed }
            onChange={ this.changeHandler }>
          </Checkbox>
        </Box>

        <Button type="submit" disabled={ !agreed }>Sign up as { login }</Button>
       
      </Form>
    );
  }
}

export default SignUpForm;