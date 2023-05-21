import styled from "@emotion/styled"

const InfinityScroll = (props: any) => {
  const { BaseComp, componentFactory } = props;
  
  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const component = componentFactory()
  }
  
  /*


// InfinityScroll.js
import React, { useState, useRef, useEffect } from 'react';

function InfinityScroll({ BaseComponent, fetchMoreData }) {
  const [posts, setPosts] = useState([]);
  const lastPostElementRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const newPosts = await fetchMoreData();
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreData().then((newPosts) => {
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
          });
        }
      },
      { threshold: 1 }
    );

    if (lastPostElementRef.current) {
      observer.observe(lastPostElementRef.current);
    }

    return () => observer.disconnect();
  }, [lastPostElementRef]);

  return (
    <>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return <BaseComponent ref={lastPostElementRef} key={post.id} {...post} />;
        } else {
          return <BaseComponent key={post.id} {...post} />;
        }
      })}
    </>
  );
}

export default InfinityScroll;


*/
  return (
    <ScrollDiv onScroll={onScroll}>
        <BaseComp/>
    </ScrollDiv>
  )
}

const ScrollDiv = styled.div`
  overflow-y: scroll;
`

export default InfinityScroll
