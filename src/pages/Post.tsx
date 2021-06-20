import react from 'react';

import { useParams } from "react-router";
import { usePost } from "../hooks/usePost";

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Profile from "../components/Profile/Profile";
import ShowPost from "../components/Post/Post";

const useStyle = makeStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem",
  },
  left: {
    "@media (max-width: 1017px)": {
      display: "none",
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    width: "40rem",
    minWidth: "15rem",
  },
  horBar: {
    margin: "1rem",
    "@media (max-width: 1017px)": {
      display: "none",
    },
  },
});

const Post = () => {
  const classes = useStyle();
  const { post_id } = useParams<{ post_id: string }>();
  const { loadPost, post } = usePost();

  react.useEffect(() => {
    loadPost(parseInt(post_id));
  }, []);

  return (
    <div className={classes.body}>
      <div className={classes.flexContainer}>
        <div className={classes.left}>
          <Profile />
        </div>
        <Divider
          className={classes.horBar}
          orientation="vertical"
          variant="inset"
          flexItem
        />
        <div className={classes.right}>
          {
            post ?
              <ShowPost
                postId={post.postId}
                title={post.title}
                time={post.time}
                md={post.body}
              />
              :
              null
          }
        </div>
      </div>
    </div>
  );
};

export default Post;