import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  About: {
    padding: "2rem",
  },
});

const About = (props: {
  md: string;
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={8} className={classes.About}>
      <div dangerouslySetInnerHTML={{__html:props.md}}/>
    </Paper>
  );
};

export default About;
