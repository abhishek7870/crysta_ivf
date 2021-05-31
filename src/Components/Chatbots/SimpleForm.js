import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import userImage from "../../images/user.svg";
import { ThemeProvider } from "styled-components";
import Post from "./Post";
import femalechaticon from "../../images/icon.png";

// all available theme props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#924A91",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#924A91",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// all available config props
const config = {
  width: "400px",
  height: "500px",
  right: "5px !important",
  placeholder: "Type your response.",
  headerTitle: "Looking for Fertlity Treatments?",
  floating: true,
  botAvatar: femalechaticon,
  userAvatar: userImage,
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "welcome",
              message:
                "Welcome to Crysta IVF - India's Most Trusted Fertility Chain!",
              trigger: "1",
            },
            {
              id: "1",
              message:
                "Crysta IVF provides fertility treatments - IVF, IUI, ICSI, Surrogacy, Laparoscopy across 18+ Cities in India with High Success Rates.",
              trigger: "2",
            },
            {
              id: "2",
              message:
                "Please provide your phone number to arrange a Free Fertility Consultation",
              trigger: "phone",
            },
            {
              id: "phone",
              user: true,
              validator: (value) => {
               
                var pattern = new RegExp(/^[0-9\b]+$/);
                if (value.match(pattern) && value.length < 16 && value.length > 9) {
                  return true;
                } else {
                  return "Please enter a valid phone number.";
                }
              },
              trigger: "q-name",
            },
            {
              id: "q-name",
              message: "What is your name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true;
                } else {
                  return "Please input alphabet characters only.";
                }
              },
              trigger: "q-city",
            },
            {
              id: "q-city",
              message: "Please let us know your City.",
              trigger: "city",
            },

            {
              id: "city",
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true;
                } else {
                  return "Please input alphabet characters only.";
                }
              },
              trigger: "q-treatment",
            },
            {
              id: "q-treatment",
              message:
                "Which treatment would you be interested in?  - IVF, IUI, Surrogacy, Laparoscopy, Other Fertility Treatment (give a option to select)",
              trigger: "treatment",
            },
            {
              id: "treatment",
              options: [
                { value: "IVF", label: "IVF", trigger: "end-message" },
                { value: "IUI", label: "IUI", trigger: "end-message" },
                {
                  value: "Surrogacy",
                  label: "Surrogacy",
                  trigger: "end-message",
                },
                {
                  value: "Laparoscopy",
                  label: "Laparoscopy",
                  trigger: "end-message",
                },
                {
                  value: "Other Fertility Treatment",
                  label: "Other Fertility Treatment",
                  trigger: "end-message",
                },
              ],
            },
            {
              id: "end-message",
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
