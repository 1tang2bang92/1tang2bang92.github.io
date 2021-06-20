import Paper from "@material-ui/core/Paper";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Head from "../../components/Icon/Head";

import profileElement from "../../assets/profileUrls.json";

import CopyLink from "../../functions/CopyLink";
import PortalLink from "../../functions/PortalLink";

import { useModal } from "../../hooks/Share";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "../../atoms/Theme";

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: "2rem",

    "& h5": {
      marginTop: "0rem",
    },
  },
  Icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  icon: {
    cursor: "pointer",
  },
  iconDarkTheme: {
    filter: "invert(100%)",
  },
});

const LoadIcons = (props: {
  name: string;
  img: string;
  copy?: string;
  link?: string;
  className?: string;
}) => {
  
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      {props.link && props.copy ? (
        <img
          className={props.className ?? ''}
          src={props.img}
          alt={props.name}
          height="24"
          width="24"
        />
      ) : props.link ? (
        <img
          className={props.className ?? ''}
          src={props.img}
          alt={props.name}
          onClick={() => PortalLink(props.link ?? "")}
          height="24"
          width="24"
        />
      ) : props.copy ? (
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
            <img
              className={props.className ?? ''}
              src={props.img}
              alt={props.name}
              onClick={() => {CopyLink(props.copy ?? ""); handleOpen()}}
              height="24"
              width="24"
            />
          </Tooltip>
        </ClickAwayListener>
      ) : (
        <img
          className={props.className ?? ''}
          src={props.img}
          alt={props.name}
          height="24"
          width="24"
        />
      )}
    </>
  );
};

const Profile = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, _setTheme] = useTheme();
  return (
    <Paper className={classes.flexContainer} elevation={8}>
      <Head />
      <h1> 1tang2bang92 </h1>
      <h5 className="describe"> 매우 심심한사람 </h5>
      <div className={classes.Icons}>
        {profileElement.map((elem, idx) => (
          <LoadIcons
            className={
              classes.icon + " " + (theme ? classes.iconDarkTheme : "")
            }
            key={`profileIcon${idx}`}
            name={elem.name}
            img={elem.url}
            link={elem.link ?? ''}
            copy={elem.copy ?? ''}
          />
        ))}
      </div>
    </Paper>
  );
};

export default Profile;
