import react from 'react';
import axios from 'axios';

import config from '../assets/config.json';

export const useMarkdown = () => {
  //const host = window.location.host;
  const [md, setMd] = react.useState('');

  const loadMd = react.useCallback(async (path: string) => {
    const tmp = await axios.get(`//${config.host}/${path}`);
    setMd(tmp.data);
  }, []);
  
  return { md, loadMd }
}