import React from 'react';
import axios from 'axios';

class EmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true
    });

    axios.post('https://ro-portfolio-api.herokuapp.com/api/email', this.state)
    //http://localhost:3030/api/email
    //https://node-portfolio-ro.herokuapp.com//api/email
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
            name: '',
            email: '',
            message: '',
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
            name: '',
            email: '',
            message: '',
          });
        }
      })
      .catch(err => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
          name: '',
          email: '',
          message: '',
        });
      })

  }

  resetForm() {

    this.setState({ name: "", email: "", message: "" })
  }

  render() {
    return (
      <div className="EmailForm">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-submit-email">Submit</button>
        </form>
        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default EmailForm;