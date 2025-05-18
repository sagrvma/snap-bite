import { useEffect, useState } from "react";
import { GithubUserAPI } from "../utils/constants";

const User = () => {
  const [name, setName] = useState("Dummy Name");
  const [location, setLocation] = useState("Dummy Location");
  const [username, setUsername] = useState("dummy-user");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(GithubUserAPI + "sagrvma");
    const data = await response.json();

    // console.log(data);

    setName(data.name);
    setLocation(data.location);
    setUsername(data.login);
  };

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: @{username}</h3>
    </div>
  );
};

export default User;
