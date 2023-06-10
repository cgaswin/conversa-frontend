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

export const authenticate = (data) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    console.log("set token in local storage")
  }
};

export const signout = async () => {
  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");

    return await axios
      .get("/logout")
      .then((response) => console.log("signout success"))
      .catch((error) => console.log(error));
  }
};

export const isAuthenticated = () => {
    if (typeof window === undefined) {
        return false
      }
      if(localStorage.getItem("jwt")){
        return true
      }else{
        return false
      }
}
