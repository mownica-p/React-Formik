import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
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
  // step 1: pass initial form values through useFormik() hook initialValues property.
  const formik = useFormik({
    initialValues,
    onSubmit,
    //validate,
    validationSchema,
  });
  // console.log("form errors", formik.errors);
  console.log("visited fields", formik.touched);

  /* step 2: pass onSubmit function to formik
     onSubmit: (values) => {
      console.log("form values", values);
    },*/

  /*step 3: pass validate function to formik
    validate: (values) => {
      // values.name  values.email values.channel
      // errors.name errors.email errors.channel
      //errors.name = "This field is Required";
     
 });*/

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          {...formik.getFieldProps("channel")}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default YoutubeForm;
