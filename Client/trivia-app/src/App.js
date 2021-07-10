import Navbar from "./components/navigation/Navbar";
import React from "react";
import "./App.css";
import Cookies from "js-cookie";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const refreshToken = Cookies.get("refreshToken");
    const errorRequest = error.response;
    if (errorRequest.status !== 303) {
      return error;
    }
    const originalRequest = error.config;
    try {
      const { accessToken } = await getNewToken(refreshToken);
      Cookies.set("token", `${accessToken}`, { expires: 1 });
      const originalResponse = await axios(originalRequest);
      return originalResponse;
    } catch (error) {
      console.log(error);
    }
  }
);
axios.interceptors.request.use(async function (config) {
  const token = await Cookies.get("token");
  config.headers.Authorization = "bearer " + token;
  return config;
});
async function getNewToken(refToken) {
  try {
    const token = await axios.post("/user/token", {
      refToken: refToken,
    });
    return token.data;
  } catch (error) {
    console.log(error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
