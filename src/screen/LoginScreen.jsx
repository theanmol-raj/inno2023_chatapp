import React from "react";

function LoginScreen(props) {
  return (
    <div className=" h-screen w-screen bg-blue-300">
      <div className=" bg-white rounded-2xl shadow-2xl shadow-purple-500  px-12 py-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 className=" text-indigo-500 text-4xl font-black">
          Innovatum Chat App
        </h1>

        <button onClick={props.fn} className=" border-2 py-4 mt-12 w-full">
          <span className=" flex items-center mx-auto justify-center">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="google-logo"
          />
          Login With Google
          </span>
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
