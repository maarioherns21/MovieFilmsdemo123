import { useState } from "react"


const useToken = () => {

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("token"));

  return user?.email;
};

const [token, setToken] = useState(getToken());

const saveToken = (user) => {
  localStorage.setItem("token", JSON.stringify(user));

  setToken(user.email);
}; 

const logout = () => {
  localStorage.removeItem("token");

  setToken(null);
};


return {
    token,
    setToken: saveToken,
    logout
}
    
}

export default useToken