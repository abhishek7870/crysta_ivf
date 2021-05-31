import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { phone, name, city, treatment } = steps;

    this.state = { phone, name, city, treatment };
  }

  

  componentDidMount() {
    const userObject = {
      phoneNumber: this.state.phone.value,
      fullName: this.state.name.value,
      city: this.state.city.value,
      treatmentType: this.state.treatment.value,
      currenturl:window.location.href
    };
    axios.post(`${process.env.REACT_APP_API_PATH}`, userObject)
      .then(res => {
        //console.log(res.status)
      }).catch(function (error) {
        //console.log(error);
      });
  }
  
  render() {
    return (
      <div>Thank you! We have received your details, our patient support team shall get back to you shortly. In case of any further assistance, please call us at 8938935353</div>
    );
  }
};


export default Post;