import Header from "./components/header/Header";
import Index from "./components/stackOverflow/Index";
import AskQuestion from "./components/addQuestion/AskQuestion";
import Questions from "./components/viewQuestion/Questions";
import Footer from "./components/footer/Footer";
import Auth from "./components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { auth } from "./components/firebase";
import { login, logout } from "./features/userSlice";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";

// console.log(import.meta.env.VITE_SOME_KEY); // 123

function App() {
  const { user } = useSelector((state) => state.user);
  const [stateUser, setStateUser] = useState(user);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch(
          login({
            uid: user.uid,
            photo: user.photoURL,
            displayName: user.displayName,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  useEffect(() => {
    setStateUser(user);
  }, [user, stateUser]);
  const PrivateRoutes = () => {
    return stateUser ? <Outlet /> : <Navigate to="/auth" />;
  };
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/add-question" element={<AskQuestion />} />
          <Route exact path="/question" element={<Questions />} />
        </Route>
        {/* // public route // */}
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
