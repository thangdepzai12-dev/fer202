import React, {useReducer} from "react";
  
const initialState ={
  email:"",
  password:"",
  message:"",

};
function reducer(state,action){
  switch(action.type){
    case "SET_EMAIL":
      return {...state,email:action.payload};
       case "SET_PASSWORD":
      return { ...state, password: action.payload };
       case "LOGIN":
      if (state.email === "admin@gmail.com" && state.password === "123456") {
        return { ...state, message: " Login successful!" };
      } else {
        return { ...state, message: " Invalid email or password!" };
      }
    default:
      return state;
  }
}
  export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN" });
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-3 text-center">Login Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          className="border rounded p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p className="mt-3 text-center">{state.message}</p>
    </div>
  );
}
  

