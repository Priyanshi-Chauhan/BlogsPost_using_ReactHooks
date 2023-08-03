import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {firestore} from '../firebase';

function Home() {
const[posts, setPosts] = useState([]);

//logic for getting the post from firestore, an empty array to be passed otherwise it will continuously make the firestore call
useEffect(() => {
firestore.collection('posts').get().then((snapshot) =>{   // "then" is for the promise
  const posts =  snapshot.docs.map((doc) => {
    return {
      id : doc.id,
      ...doc.data()     // document's data will not have the id, we have to grab the id separately by doing the map over each and every document.
    }
  })
   console.log('posts', posts);
   setPosts(posts);
})
}, [])

  return (<div className="home">
    <h1 style = {styles.heading} > 
      
      {/* {inline styling} */}
            Tech Blog
    </h1>
    <button>this is a button</button>
 <div id ="blog-by">Priyanshi</div>
 {posts.map((post, index)=>(
// key because we are using the map function
// we have a link because we will be linking it back to postdetail page. /post/Idofthepost
  <div className = "post" key={`post-${index}`}> 
<Link to ={`/post/${post.id}`}>
  <h3>{post.title}</h3>
</Link>
<p>{post.subtitle}</p>
  </div>
 )
 )}  
  </div>
  );
}

export default Home;

const styles=  {
  heading : {
    marginTop :30 ,
    fontSize : 56

  }
}