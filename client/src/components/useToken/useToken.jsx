import { useState } from "react"


const useToken = () => {
  const getToken = () => {
    const string = localStorage.getItem("token");

    const userToken = JSON.parse(string);

    return userToken?.result.email;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    try {
      localStorage.setItem("token", JSON.stringify(userToken));

      setToken(userToken.result.email);
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);
  };

  return {
    token,
    setToken: saveToken,
    logout,
  };
};

export default useToken