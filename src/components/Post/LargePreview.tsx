import { Link } from 'react-router-dom';

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core";

import MdParser from '../../functions/MdParser';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  About: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "auto",
  },
  textArea: {
    display: "flex",
    flexDirection: 'row',
    margin: '2rem',
    justifyContent:'space-between',
    "&h1": {
      marginTop: '0rem',
    }
  },
  box: {
    width: "20rem",
    height: '5rem',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    span: {
      marginTop: 'auto'
    }
  },
  describe: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2rem',
    textAlign: 'left',
    '& :nth-child(2)': {
      marginTop: 'auto',
    }
  },
});

const Post = (props: {
  postId: number;
  title: string;
  time: string;
  md: string;
  img?: string;
}) => {
  const classes = useStyles();

  return (
    <Link to={{pathname: `/post/${props.postId}`}} className={classes.link}>
      <Paper elevation={8} className={classes.About}>
        {props.img ? <img className={classes.image} src={props.img} alt="Thumbnail" /> : null}
        <div className={classes.textArea}>
          <h1> {props.title} </h1>
          <span>{props.time}</span>
        </div>
        <div className={classes.describe}>
          <span className={classes.box} dangerouslySetInnerHTML={{__html: MdParser(props.md)}} />
          <span> more {"->"} </span>
        </div>
      </Paper>
    </Link>
  );
};

export default Post;
