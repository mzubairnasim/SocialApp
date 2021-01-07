import React,{useState,useEffect,useContext} from 'react'
import './post.css'
import {db} from '../config/firebase'
import firebase from 'firebase'
import { Context } from './store.js'
function Post({postId}) {

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("")
  const {state,dispatch} = useContext(Context)
         const {user}=state
useEffect(() => {

   if (postId) {
   db.collection("posts")
    .doc(postId)
    .collection("comments")
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) => {
      setComments(snapshot.docs.map((doc) => doc.data()))
    })
  }
  

}, [])


const postComment = (event) => {
  event.preventDefault();
db.collection("posts").doc(postId).collection("comments").add({
    text:comment,
    username: user.displayName,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

}

  return (
    
    <div>     
      {
        <div className="post__comments">
          {comments.map((comment) => (
            <p>
              <strong>{comment.username}:</strong> {comment.text}
            </p>

          ))}
        </div>

      }

      {user&&

      <form className="post__commentBox">
        <input 
        className="post__input"
        type="text"
        placeholder="type here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        />
        <button
        className="post__button"
        disabled={!comment}
        type="submit"
        onClick={postComment}
        className='btn btn-warning ml-3'
        >Post</button>
      </form>
      }
 </div>

  );
}

export default Post;

















