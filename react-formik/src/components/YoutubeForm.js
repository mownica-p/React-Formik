import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TestError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("form values", values);
};

//validation function
//Defining validation schema object
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        {/* Define form fields */}
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="Youtube channel"
          />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {/*destructuring Field props*/}
            {(props) => {
              const { field, form, meta } = props;
              console.log("Render props", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary Phone Number</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>

        <div className="form-control">
          <label htmlFor="phNumbers">List of Phone Numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              console.log("fieldArrayProps", fieldArrayProps);
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default YoutubeForm;
