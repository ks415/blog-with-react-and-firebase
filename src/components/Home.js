import React, { useEffect, useState } from 'react'
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Home = () => {
  const examplePost = {
    id: "example",
    title: "掲示板へようこそ！",
    postText: "これは投稿の例です。Googleアカウントでログインすると記事を投稿できます。投稿した記事は、この形式で表示されます。",
    author: {
      username: "管理人",
      id: "admin"
    }
  };

  const [postList, setPostList] = useState([examplePost]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      const firestorePosts = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      if (firestorePosts.length > 0) {
        setPostList([...firestorePosts, examplePost]); // Firestoreの投稿がある場合
      } else {
        setPostList([examplePost]); // Firestoreの投稿がない場合
      }
    };
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleDeletePost = async (id) => {
    if (id === "example") return; // 例示用の投稿は削除できないように
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className='postContents' key={post.id}>
            <div className='postHeader'>
              <h1>{post.title}</h1>
            </div>
            <div className='posttextContainer'>
              {post.postText}
            </div>
            <div className='nameAndDeleteButton'>
              <h3>{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDeletePost(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Home