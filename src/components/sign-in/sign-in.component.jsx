import React from "react";

import FormInput from '../form-input/form-input.component.jsx';

import CustomButton from "../custom-button/custom-button.component.jsx";

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    } 

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }


    render() {
        return(
            <div className="sign-in">
                <h2>I already have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label='email'
                    required />
                    
                    <FormInput 
                    type="password" 
                    name="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label='password'
                    required />
                    
                    <CustomButton type="submit">Submit Form</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn