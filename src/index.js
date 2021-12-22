import React from "react";
import ReactDOM from "react-dom";
import Form from "./formGenerationEngine";

import "./styles.css";

const schema = {
  type: "object",
  required: ["employeeId", "mobileNumber", "gender", "multipleSelect"],
  properties: {
    employeeId: {
      type: "string",
      title: "Employee Id"
    },
    firstName: {
      type: "string",
      title: "First Name",
      prefix: "Mr."
    },
    lastName: {
      type: "string",
      title: "Last Name",
      suffix: "DONE"
    },
    email: {
      type: "string",
      title: "Email/User Name",
      format: "email"
    },
    mobileNumber: {
      type: "string",
      title: "Mobile No."
    },
    callbackNumber: {
      type: "string",
      title: "Callback No."
    },
    ellisionId: {
      type: "string",
      title: "Ellision Id",
      disabled: true
    },
    gender: {
      type: "string",
      title: "Gender",
      anyOf: [
        {
          type: "string",
          title: "Male",
          enum: ["Male"]
        },
        {
          type: "string",
          title: "Female",
          enum: ["Female"]
        }
      ]
    },
    status: {
      type: "string",
      title: "Status",
      disabled: false,
      anyOf: [
        {
          type: "string",
          title: "Active",
          enum: ["Active"]
        },
        {
          type: "string",
          title: "Inactive",
          enum: ["Inactive"]
        }
      ]
    },
    isMarried: {
      type: "boolean",
      title: "Are you married?"
    },
    multipleSelect: {
      type: "array",
      title: "Status",
      items: {
        type: "string",
        enum: ["Active", "Inactive"],
        enumNames: ["My Active", "My Inactive"]
      },
      uniqueItems: true
    }
  }
};

const uiSchema = {
  status: {
    "ui:widget": "radio"
  }
};

const onSubmit = ({ formData }) => alert("Data submitted: ", formData);

function App() {
  return <Form schema={schema} onSubmit={onSubmit} uiSchema={uiSchema} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
