import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { db } from './firebase';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    post: doc.data()
                }))
            );
        });
    }, []);

    return (
        <div className="App">
            <Header />
            {posts.length}

            <Post
                username="capcha"
                caption="wow it works"
                imageUrl="https://t1.daumcdn.net/cfile/blog/15450E415135F1A334"
            />
            <Post
                username="capcha"
                caption="wow it works"
                imageUrl="https://t1.daumcdn.net/cfile/blog/15450E415135F1A334"
            />
            {posts.map(({ id, post }) => (
                <Post
                    key={id}
                    username={post.username}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                />
            ))}
        </div>
    );
}

export default App;
