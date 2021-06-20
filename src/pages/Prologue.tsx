import react from "react";
import LargeAbout from "../components/About/LargePreview";
import LargePost from "../components/Post/LargePreview";

import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/styles";
import { usePost } from "../hooks/usePost";
import { usePosts } from "../hooks/usePosts";
import { useMarkdown } from "../hooks/useMarkdown";

import Card from "../components/Post/Card";

const useStyle = makeStyles({
  Prologue: {
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '60rem',
    "@media(max-width: 1009px)": {
      margin: '1rem 1rem',
    },
  },
  bar: {
    margin: '1rem',
  },
  recentPost: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    overflowX: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    margin: '-1rem',
    padding: "1rem",
    "&::-webkit-scrollbar": {
      display: 'none',
    },
    '& > a:nth-child(n+2)': {
      marginLeft: '1rem',
    }
  }
});


const Prologue = () => {
  const classes = useStyle();
  const { loaded, loadPosts, postList } = usePosts();
  const { loadPost, post } = usePost();
  const { md, loadMd } = useMarkdown();

  react.useEffect(() => {
    loadPost(1);
    loadPosts(1);
    loadMd('about');
  }, []);

  return (
    <div className={classes.Prologue}>
      <LargeAbout md={md} />
      <Divider className={classes.bar} />
      {(post) ?
        <LargePost
          postId={post.postId}
          title={post.title}
          time={post.time}
          img=""
          md={post.body}
        />
        :
        null}

      <Divider className={classes.bar} />
      <div className={classes.recentPost}>
        {
          loaded ?
            postList.map((value, idx) =>
              (
                <Card
                  key={idx}
                  postId={value.postId}
                  title={value.title}
                  time={value.time}
                  md={value.body}
                />
              )
            )
          :
          null
        }
      </div>
    </div>
  );
};

export default Prologue;
