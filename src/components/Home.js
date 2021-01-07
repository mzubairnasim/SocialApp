import React,{useState,useEffect,useContext} from 'react'
import Post from './Post'
import { auth, db } from '../config/firebase'
import './Home.css'
import { Context } from './store'
import ImageUpload from './ImageUpload'
export default function Home() {
    const {state,dispatch} = useContext(Context)
    const {user}=state
  const [arrPosts, setarrPosts] = useState([])
    useEffect(() => {
            db.collection("posts").orderBy("timestamp",'desc').onSnapshot(snapShot=>{
                setarrPosts(
                    snapShot.docs.map(doc=>({
                        id:doc.id,
                        post:doc.data()
                    }))
                )
            })
    }, [])
    return (
        <div className='container'>
        {user?.displayName? (
                  <div>
                  <ImageUpload username={user.displayName} />
                  </div>
                ) : (
                  <h3><center>Login To Upload</center></h3>
                  
                )}
        <div className='row'>
                
                {arrPosts.map(({post,id})=>(
                    <div className='col-lg-10 col-md-10 col-12 offset-lg-2 offset-md-2'>
             <div className='card carddes'>
             <div className='d-flex align-items-center'>
             <h4 className='roundimg'>{post.username.length<1?<h2 >{post.username}</h2>:
             <h3 className='roundtitle'>{post.username.substring(0,1)}</h3>}</h4>
             <h3 className='ml-2'>{post.username}</h3>
             </div>
            
             <img
                 src={post.imageUrl}
                 className='imgone'
             />
             <div className='d-flex align-items-center'>
             <h3 className='ml-4 pt-1'>{post.username}:</h3>
             <p className='ml-2  pt-4'>{post.caption}</p>
                   
             </div>
             <Post postId={id}/>
            </div>
            </div>
         ))}
               
        </div>
        
         
        </div>
    )
}
