import React from 'react';
import {firestore} from '../firebase';
import { useForminput } from '../hooks';
import './Button.css';   // this css file is not scope to this particular component, as we can see the button in home component is having the style applied in the "button.css" file. if we have to scope this file in this component only, then we have to use className in other components

function CreatePost() {
  //const[title, setTitle] = useState('');     // this is some kind of redundancy, as we have placeholder for our state and the function to change that state. this will be for every input in every form. so we can basically remove by creating a custom hook 
 // const[subtitle, setSubtitle] = useState('');
  //const[content, setContent] =  useState('');
const title = useForminput('');
 const subtitle= useForminput('');
 const content  = useForminput('');

function handlesubmit(e){
e.preventDefault();
console.log('title', title);
console.log('subtitle', subtitle);
console.log('content', content);

firestore.collection('posts').add({
title : title.value, 
content :content.value, 
subtitle : subtitle.value, 
createdAt : new Date()  
})
}

  //using the classes for which styles have been written by me
  return <div className="create-post">  
  <h1>Create Post</h1>

 <form onSubmit = {handlesubmit}>
  <div className = "form-field">
    <label>Title</label>
    <input {...title} />
  </div>

  <div className="form-field">
    <label>Sub Title</label>
    <input {...subtitle}/>
  </div>

  <div className="form-field">
    <label>Content</label>
    <textarea {...content} ></textarea>
  </div>
  <button className = "create-post-btn">Create post</button>
</form>
  </div>;
}

export default CreatePost; 

