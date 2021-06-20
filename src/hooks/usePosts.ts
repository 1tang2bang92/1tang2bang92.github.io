import react from "react";
import axios from "axios";

import config from '../assets/config.json';

type Post = {
  postId: number;
  title: string;
  time: string;
  body: string;
};

export const usePosts = () => {
  const [postList, setPostList] = react.useState<Post[]>([]);
  const [loaded, setloaded] = react.useState(false);
  const [postCount, setPostCount] = react.useState(1);

  const loadPostCount = react.useCallback(async () => {
    const res = await axios.get(`//${config.host}/post/_count`, {
      method: "GET",
      responseType: "json",
    });

    const json = res.data;

    setPostCount(json.count);
  }, []);

  const loadPosts = react.useCallback(async (page: number) => {
    setloaded(false);
    const res = await axios.get(`//${config.host}/post/${page}`, {
      method: "GET",
      responseType: "json",
    });

    const json = res.data;

    setPostList(json);
    setloaded(true);
  }, []);

  return { loadPostCount, loadPosts, loaded, postCount, postList };
};
