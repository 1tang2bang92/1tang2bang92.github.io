import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/styles";

import element from "../../assets/contact.json";

const useStyle = makeStyles({
  Contact: {
    padding: "2rem",
    width: "30rem",
    "@media (max-width: 46rem)": {
      width   : " auto",
      minWidth: "20rem"
    },
  },
  value: {
    "& h1": {
      margin: "0rem",
    },
    "& span": {
      display: "flex",
      flexDirection: "row",
      marginLeft: "2rem",
      margin: "1rem",
      "& h5": {
        fontSize: "medium",
        margin: "0rem",
      },
      span: {
        
      }
    },
  },
});

const DisplayContact = (props: {
  className: string;
  name: string;
  type: string;
  value: string;
}) => {
  return (
    <div className={props.className}>
      <h1> {props.name} </h1>
      <Divider />
      <span>
        <h5> {props.type} &nbsp;:&nbsp; </h5> {props.value}
      </span>
    </div>
  );
};

const Contact = () => {
  const classes = useStyle();

  return (
    <Paper elevation={8} className={classes.Contact}>
      {element.map((e) => (
        <DisplayContact
          className={classes.value}
          key={e.name}
          name={e.name}
          type={e.type}
          value={e.value}
        />
      ))}
    </Paper>
  );
};

export default Contact;
