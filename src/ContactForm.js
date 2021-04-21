import React, {Component} from 'react';
import firebase from 'firebase';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("contact");
    this.state= {
      name: "",
      email: "",
      subject: "",
      message: "",
      status : false
    }
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, subject, message } = this.state;

    this.ref
      .add({
        name,
        email,
        subject,
        message
      })
      .then(docRef => {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
          status: true
        });
      })
      .catch(error => {
        console.log("Error adding document: ", error);
      });
  };

  render() {
    return (
      <form role="form" className="contact-form" onSubmit={this.onSubmit}>
      {this.state.status && <div>Message Sended</div>}
      {this.state.status === false &&
        <ul className="row">
          <li className={this.props.sm.set1}>
            <label>
              <input type="text" name="name" value={this.name} className="form-control" placeholder="NAME" onChange={this.onChange} />
            </label>
          </li>
          <li className={this.props.sm.set1}>
            <label>
              <input type="text" name="email" value={this.email} className="form-control" placeholder="EMAIL" onChange={this.onChange} />
            </label>
          </li>
          <li className={this.props.sm.set1}>
            <label>
              <input type="text" name="subject" value={this.subject} className="form-control" placeholder="SUBJECT" onChange={this.onChange} />
            </label>
          </li>
          <li className={this.props.sm.set2}>
            <label>
              <textarea className="form-control" name="message" rows="5" placeholder="CONTENT..." onChange={this.onChange} >{this.message}</textarea>
            </label>
          </li>
          <li className={this.props.sm.set2}>
            <button type="submit">SEND ME</button>
          </li>
        </ul>
      }
      </form>
  )
  }
}

export default ContactForm;