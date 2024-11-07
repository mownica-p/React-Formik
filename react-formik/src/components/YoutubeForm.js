import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
  // step 1: pass initial form values through useFormik() hook initialValues property.
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },

    onSubmit: (values) => {
      console.log("form values", values);
    },
  });
  // console.log('"form values"', formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="channel">Channel</label>
      <input
        type="text"
        name="channel"
        onChange={formik.handleChange}
        value={formik.values.channel}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
export default YoutubeForm;
