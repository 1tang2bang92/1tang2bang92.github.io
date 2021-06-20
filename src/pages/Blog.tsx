import react from "react";
import { usePosts } from "../hooks/usePosts";

import Profile from "../components/Profile/Profile";
import Post from "../components/Post/Post";
import PostSkeleton from "../components/Post/Skeleton"

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Pagination from "@material-ui/lab/Pagination";

import { handlePage } from "../hooks/handlePage";

const useStyles = makeStyles({
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
  pagen: {
    display: 'flex',
    flexDirection: 'row',
    margin: '2rem',
    justifyContent: 'center',
  }
});

const Blog = () => {
  const classes = useStyles();
  const { loadPostCount, loadPosts, loaded, postCount, postList } = usePosts();
  const { page, handleChange } = handlePage();

  react.useEffect(() => {
    loadPosts(page);
    loadPostCount();
  }, [ page ]);

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
          {loaded ?
            postList.map((value, idx) => (
              <Post
                key={`post${idx}`}
                postId={value.postId}
                title={value.title}
                time={value.time}
                md={value.body}
              />
            ))
          :
          [0,1,2].map((idx) => (
            <PostSkeleton key={`PostSkeleton${idx}`}/>
          ))}
        </div>
      </div>
      <Pagination 
        className={classes.pagen} 
        count={Math.ceil(postCount/3)} 
        defaultPage={1} 
        boundaryCount={2} 
        showFirstButton 
        showLastButton
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default Blog;
