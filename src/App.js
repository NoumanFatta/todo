import Routes from "./Routes";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import * as jose from "jose";
import { useEffect } from "react";
import { setUserData } from "./store/reducers/auth-slice";

const App = () => {
  // const totos = [{
  //   title:"todo 1",
  //   id: "101",
  //   status:"active",
  //   description: "descp 1",
  //   createdBy: 'd9eedb2a-5078-40df-9d88-709354626ff2'
  // }]
  // localStorage.setItem("todos", JSON.stringify(totos));
  // const groups = [
  //   {
  //     name: "Group 1",
  //     id: "1001",
  //     createdBy: "d9eedb2a-5078-40df-9d88-709354626ff2",
  //     todos: ["101"],
  //   },
  // ];
  // localStorage.setItem("groups", JSON.stringify(groups));
  const secret = new TextEncoder().encode("NoumanAminFatta");
  const loginStatus = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const setUser = async () => {
      if (loginStatus.isLoggedIn) {
        const jwt = loginStatus.user;
        const { payload } = await jose.jwtVerify(jwt, secret);
        dispatch(setUserData(payload));
      }
    };
    setUser();
    // eslint-disable-next-line
  }, [loginStatus]);
  return <Routes isLoggedIn={loginStatus.isLoggedIn} />;
};

export default App;
