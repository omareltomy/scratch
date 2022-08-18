import Head from "next/head";
import Form from "../components/FormPage";
import Dashboard from "../components/DashboardPage";
import { auth } from "../src/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setLoading(false);
      // ...
    } else {
      setLoading(false);
      setUser(null);
    }
  });
  return loading ? <></> : !user ? <Form /> : <Dashboard />;
};

export default Home;
