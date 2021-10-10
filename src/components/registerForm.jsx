import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", password_confirmation: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    password_confirmation: Joi.any().valid(Joi.ref("password")),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        let errMsgs = JSON.parse(ex.response.data.message);
        for (let key in errMsgs) {
          errors[key] = errMsgs[key];
        }
        console.log(errors);
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput(
            "password_confirmation",
            "Confirm password",
            "password"
          )}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
