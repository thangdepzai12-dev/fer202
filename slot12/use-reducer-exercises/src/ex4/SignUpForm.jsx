import React, { useReducer } from "react";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      if (
        !state.username ||
        !state.email ||
        !state.password ||
        !state.confirmPassword
      ) {
        return { ...state, message: "❌ Please fill all fields!" };
      }
      if (state.password !== state.confirmPassword) {
        return { ...state, message: "❌ Passwords do not match!" };
      }
      return { ...state, message: `✅ Welcome, ${state.username}!` };
    default:
      return state;
  }
}

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-3 text-center">Sign Up Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={state.email}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={state.password}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          value={state.confirmPassword}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-3 text-center">{state.message}</p>
    </div>
  );
}
