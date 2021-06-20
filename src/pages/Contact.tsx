import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

import Profile from "../components/Profile/Profile";
import ContactComp from "../components/Contact/Contact";

const useStyle = makeStyles({
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "1rem",
  },
  profile: {
    width: "300px",
    "@media (max-width: 54.5rem)": {
      display: "none",
    },
  },
  horBar: {
    margin: "1rem",
    "@media (max-width: 54.5rem)": {
      display: "none",
    },
  },
});

const Contact = () => {
  const classes = useStyle();

  return (
    <div className={classes.contact}>
      <div className={classes.profile}>
        <Profile />
      </div>
      <Divider
        className={classes.horBar}
        orientation="vertical"
        variant="inset"
        flexItem
      />
      <div>
        <ContactComp />
      </div>
    </div>
  );
};

export default Contact;
