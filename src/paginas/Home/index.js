import React from "react";
import Banner from "componentes/Banner";
import styles from "./Home.module.css";
import posts from "json/posts.json";
import Post from "componentes/Post";

function Home() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
