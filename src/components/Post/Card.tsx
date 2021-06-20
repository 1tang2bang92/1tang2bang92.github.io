import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from "@material-ui/styles";
import MdParser from '../../functions/MdParser';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  Card: {
    width: '19rem',
    height: '23rem',
  },
  body: {
    padding: '1rem',
    height: 'auto',
  },
  thumbnail: {
    width: '100%',
    height: '35%',
    objectFit: 'cover',
  },
  more: {
    textAlign: 'right',
    verticalAlign: 'bottom'
  }
})

const Card = (props: { postId: number; title: string; time: string; md: string; img?: string }) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={{pathname: `/post/${props.postId}`}}>
      <Paper className={classes.Card} elevation={8}>
        <img className={classes.thumbnail} src={props.img ?? ""} alt="thumbnail" />
        <div className={classes.body}>
          <h2> {props.title} </h2>
          <Box textOverflow="ellipsis" dangerouslySetInnerHTML={{__html: MdParser(props.md)}} /> 
            <Typography className={classes.more}>
              {"more ->"} 
            </Typography>
        </div>
      </Paper>
    </Link>
  );
};

export default Card;