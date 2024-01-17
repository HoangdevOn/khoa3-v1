import React, { useEffect } from "react";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Login from "./components/LogReg/login/Login";
import Register from "./components/LogReg/register/Register";
import FeaturePosts from "./components/featurepost/FeaturePosts";
import DailyPost from "./components/dailypost/DailyPost";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("103.39.125.47:3000/auth/login")
  //     .then((response) => {
  //       console.log(" ", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("", error.message);
  //     });
  // }, []);
  return (
    <div className="App">
      {/* <Header />
      <News />
      <FeaturePosts />
      <DailyPost />
      <Footer /> */}
      <Login />
      <Register />
    </div>
  );
}

export default App;
