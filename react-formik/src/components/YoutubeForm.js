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
  });
  console.log('"form values"', formik.values);
  return (
    <form>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label for="channel">Channel</label>
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
