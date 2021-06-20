import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import SearchIcon from "@material-ui/icons/Search";

import Theme from "../../atoms/Theme";

import { makeStyles } from "@material-ui/core/styles";
// import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "0rem 1rem",
    padding: '0.8rem 1rem',
    //alignItems: 'center'
    "& div": {
      display: "flex",
      alignItems: "center",
      "& > svg": {
        cursor: "pointer",
        margin: "auto 1rem",
      },
    },
  },
  link: {
    display: "inline-block",
    margin: "auto",
    verticalAlign: "middle",
    textDecoration: "none",
  },
  Background: {
    padding: "15px",
    borderRadius: "100%",
    height: "25px",
    width: "25px",
  },
});

const Navigation = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDark, setThemeDark] = useRecoilState(Theme.Theme);

  return (
    <div className={classes.flexContainer}>
      <Link to="/">
        <Avatar src="/1tang2bang92.png" />
      </Link>
      <Link to="/prologue" className={classes.link}>
        <Paper elevation={0} square>
          Prologue
        </Paper>
      </Link>
      <Link to="/" className={classes.link}>
        <Paper elevation={0} square>
          Blog
        </Paper>
      </Link>
      <Link to="/contact" className={classes.link}>
        <Paper elevation={0} square>
          Contact
        </Paper>
      </Link>
      <Link to="/about" className={classes.link}>
        <Paper elevation={0} square>
          About Me
        </Paper>
      </Link>
      <div>
        <SearchIcon />
        {
          isDark ?
            <Brightness5Icon
              onClick={() => {
                setThemeDark((value) => !value);
                window.localStorage.setItem('theme','light');
              }}
            />
            :
            <Brightness2Icon
              onClick={() => {
                setThemeDark((value) => !value);
                window.localStorage.setItem('theme','dark');
              }}
            />
        }
        
      </div>
    </div>
  );
};

export default Navigation;
