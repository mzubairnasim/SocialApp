import React, { useState } from "react";
import { auth, db, storage } from '../config/firebase';
import firebase from 'firebase'
export default function ImageUpload({username}) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");

    const handleFile=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const upload=(e)=>{
        e.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on("state_changed", (snapshot) => {
      
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
            // Error Function
            console.log(error);
            alert(error.message)
        },
        () => {
            // complete function
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                // post image inside db
                db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl : url,
                username: username
                })
    
                setProgress(0);
                setCaption("");
                setImage(null);
            })
        }
        
        );
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 col-md-10 col-12 offset-lg-1 offset-md-1'>
                        <form onSubmit={upload}>
                        <div className='form-group'>
                            <progress value={progress} max='100'/>
                        </div>
                        <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter Caption" value={caption}
                           onChange={e=>setCaption(e.target.value)}
                        />
                          <div class="form-group">
                          <input type='file' onChange={handleFile} />
                          </div>
                       <button type='submit' className='btn btn-info'>Upload</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
