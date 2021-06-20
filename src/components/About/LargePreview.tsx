import { Link } from 'react-router-dom';

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  About: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: "30rem",
    height: '13rem',
    margin: "2rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  arrow: {
    marginTop: 'auto',
    padding: "2rem",
    cursor: "pointer",
  }
});

const About = (props: { 
  md: string;
  img?: string;
}) => {
  const classes = useStyles();

  return (
    <Link to="/about" className={classes.link}>
      <Paper elevation={8} className={classes.About}>
        {props.img ? <img src={props.img} alt="Thumbnail" /> : ""}
        <div className={classes.box} dangerouslySetInnerHTML={{__html:props.md}} />
          <span className={classes.arrow}> more {"->"} </span>
      </Paper>
    </Link>
  );
};

export default About;
