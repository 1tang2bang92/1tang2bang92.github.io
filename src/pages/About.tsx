import react from 'react';
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

import Profile from "../components/Profile/Profile";
import AboutComp from "../components/About/About";

import { useMarkdown } from "../hooks/useMarkdown";

const useStyle = makeStyles({
  About: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "1rem",
  },
  profile: {
    "@media (max-width: 1017px)": {
      display: "none",
    },
  },
  horBar: {
    margin: "1rem",
    "@media (max-width: 1017px)": {
      display: "none",
    },
  },
  right: {
    width: '640px',
  }
});

const About = () => {
  const classes = useStyle();
  const { md, loadMd } = useMarkdown();

  react.useEffect(() => {
    loadMd('about')
  },[]);

  return (
    <div className={classes.About}>
      <span className={classes.profile} >
        <Profile />
      </span>
      <Divider
        className={classes.horBar}
        orientation="vertical"
        variant="inset"
        flexItem
      />
      <div className={classes.right}>
          <AboutComp md={md}/>
      </div>
    </div>
  );
};

export default About;
