import axios from "../api/axios";

export const signup = async (user) => {
  return await axios
    .post("/signup", user)
    .then((response) => {
        return response.data
    })
    .catch((error) => error);
};

export const signin = async (user) => {
  return await axios
    .post("/login", user)
    .then((response) => response.data)
    .catch((error) => error);
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = async (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    next();

    return await axios
      .get("/signout")
      .then((response) => console.log("signout success"))
      .catch((error) => console.log(error));
  }
};

export const isAuthenticated = () => {
    if (typeof window === undefined) {
        return false
      }
      if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
      }else{
        return false
      }
}
