import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [signUp, setSignUp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [displayError, setDisplayError] = useState("");

  const navigate = useNavigate();

  const submitForm = (values) => {
    setLoading(true);
    const { fullname, email, password } = values;
    // check for regex

    if (signUp) {
      // Sign up
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(userCredential);
          setLoading(false);
          // navigate("/browse");
        })
        .catch((error) => {
          setDisplayError(error.message);
          setLoading(false);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          // navigate("/browse");
        })
        .catch((error) => {
          setDisplayError(error.message);
          console.log(error);
          setLoading(false);
        });
    }
  };
  return (
    <div className="absolute bg-black bg-opacity-80 z-[11] w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white p-14 rounded-md">
      <h5 className=" text-4xl mb-6">{signUp ? "Sign Up" : "Sign In"}</h5>
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        onSubmit={submitForm}>
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            {signUp && (
              <Field
                type="text"
                name="fullname"
                placeholder="Full name"
                className="bg-[#333] p-2 my-2 rounded-md w-[100%]"
              />
            )}

            <Field
              type="email"
              name="email"
              placeholder="Email or phone number"
              className="bg-[#333] p-2 my-2 rounded-md w-[100%]"
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="bg-[#333] p-2 my-2 rounded-md w-[100%]"
            />
            {displayError && (
              <p className="text-[#E50815]">error: {displayError}</p>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className={`${
                loading ? "bg-gray-500" : "bg-[#E50815]"
              } w-[100%] my-6 rounded-md p-2`}>
              {signUp ? "Sing Up" : "Sign In"} {loading && "..."}
            </button>
          </Form>
        )}
      </Formik>
      <p className="py-4 cursor-pointer" onClick={() => setSignUp(!signUp)}>
        {signUp
          ? "Already registered? Sign In Now."
          : "New to Netflix? Sign Up Now"}
      </p>
    </div>
  );
};

export default SignUpForm;
