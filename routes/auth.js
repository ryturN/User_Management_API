import { login,register } from "../controllers/authController.js";


const auth = [
  {
    method: "POST",
    path: "/register",
    handler: register,
  },
  {
    method: "POST",
    path: "/login",
    handler: login,
  },
];

export default auth;