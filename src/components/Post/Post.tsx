import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/styles";
import ShareIcon from "@material-ui/icons/Share";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { useModal } from "../../hooks/Share";
import CopyLink from "../../functions/CopyLink"

import MdParser from '../../functions/MdParser';

const useStyles = makeStyles({
  Paper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    padding: "2rem",
  },
  discribe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0rem 1rem",
  },
  divider: {
    margin: "1rem 0rem",
  },
  modal: {
    position: "relative",
    top: "25%",
    left: "25%",
    width: "50%",
    height: "50%",
  },
  share: {
    cursor: "pointer",
    float: "right",
  },
  body: {
    //main text decoration part
  }
});

const Post = (props: { postId: number; title: string; time: string; md: string }) => {
  const classes = useStyles();

  const { open, handleOpen, handleClose } = useModal();

  return (
    <Paper className={classes.Paper} elevation={8}>
      <header>
        <h1>{props.title}</h1>
        <div className={classes.discribe}></div>
          <span>{props.time}</span>
          <span className={classes.share}>
            <ClickAwayListener onClickAway={handleClose}>
              <Tooltip 
                open={open} 
                PopperProps={{
                  disablePortal: true,
                }}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Copied!"
              >
                <ShareIcon className={classes.share} onClick={async () => { await CopyLink(`https://1tang2bang92.github.io/post/${props.postId}` ?? ''); handleOpen()}} />
              </Tooltip>
            </ClickAwayListener>
          </span>
        <Divider className={classes.divider} />
      </header>
      <div className={classes.body} dangerouslySetInnerHTML={{__html:MdParser(props.md)}} />
    </Paper>
  );
};

export default Post;
