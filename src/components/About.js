import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-body">
      <h1>About Us</h1>
      <User name="Sagar" location="Delhi" contact="@sagrvma"></User>
      <UserClass name="Sagar" location="Delhi" contact="@sagrvma"></UserClass>
    </div>
  );
};

export default About;
