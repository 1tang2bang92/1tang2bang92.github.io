import react from "react";
import axios from "axios";

import config from '../assets/config.json';

type Post = {
  postId: number;
  title: string;
  time: string;
  body: string;
};

export const usePost = () => {
  // const hostname = window.location.hostname;
  const [post, setPost] = react.useState<Post>();

  const loadPost = react.useCallback(async (page: number) => {
    const res = await axios.get(`//${config.host}/post/_doc/${page}`, {
      method: "GET",
      responseType: "json",
    });

    const json = res.data;
    console.log(json)

    setPost(json);
  }, []);

  return { loadPost, post };
};
