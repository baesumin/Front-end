import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { auth, db } from './firebase';
import { Button, Input, Modal } from '@material-ui/core';
import ImageUpload from './components/ImageUpload';
import ModalLogin from './components/ModalLogin';

function App() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubcribe();
        };
    }, [user]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data()
                    }))
                );
            });
    }, []);

    return (
        <div className="app">
            <ModalLogin />

            <Header></Header>

            {user?.displayName ? <ImageUpload username={user.displayName} /> : <h3> </h3>}

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
