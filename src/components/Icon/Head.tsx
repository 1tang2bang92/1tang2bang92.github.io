import { useRecoilValue } from "recoil";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Paper, Avatar } from "@material-ui/core";

import Theme from "../../atoms/Theme";

const useStyles = makeStyles({
  Background: {
    padding: "15px",
    borderRadius: "100%",
  },
  Head: {
    height: "200px",
    width: "200px",
  },
});

const Head = () => {
  const classes = useStyles();
  const themeOption = useRecoilValue(Theme.IsLightTheme);
  const theme = createMuiTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.Background}>
        <Avatar className={classes.Head} src="/1tang2bang92.png" />
      </Paper>
    </ThemeProvider>
  );
};

export default Head;
