import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
  const formik = useFormik({});
  return (
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />

      <label for="email">Email</label>
      <input type="email" name="email" />

      <label for="channel">Channel</label>
      <input type="text" name="channel" />

      <button type="submit">Submit</button>
    </form>
  );
}
export default YoutubeForm;
