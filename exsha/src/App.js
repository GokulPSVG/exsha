import { Route, Routes, useNavigate} from 'react-router-dom';
import Posts from './Posts';
import Home from './Home';
import About from './About';
import { useState } from 'react';
import Contact from './Contact';
import Header from './Header';
import ShowPost from './ShowPost';

function App() {
  const [posts,setposts]=useState([{id:1,title:'WELCOME',content:'Create your first post',likeCount:0,shareCount:0}])
  const [newTitle,setnewTitle]=useState(' ')
  const [newContent,setnewContent]=useState(' ')
  const [menuBar,setmenuBar]=useState(false)
  const [allComments,setallComments]=useState([{id:1,comments:[]}])

  const navigate=useNavigate()
  
  const handelSubmit=(e)=>{
      e.preventDefault()
      const id=posts.length ? posts[posts.length-1].id+1 : 1
      const newPost={id:id,title:newTitle,content:newContent,likeCount:0,shareCount:0}
      const modPost=[...posts,newPost]
      setposts(modPost)
      localStorage.setItem('exsha',JSON.stringify(modPost))
      const commentArray = {id:id,comments:[]}
      const commentArray2 = [...allComments,commentArray]
      setallComments(commentArray2)
      setnewContent('')
      setnewTitle('')
      navigate('/')
  }

  const handelMenu=(e)=>{
    e.preventDefault()
    setmenuBar(!menuBar)
  }

  return (
    <div className="App">
       <Header 
          handelMenu={handelMenu}
        />
      <Routes>
        <Route path='/' element={<Home 
            posts={posts}
            menuBar={menuBar}
        />} />
        
        <Route path='/newPost' element={<Posts 
            newTitle={newTitle}
            newContent={newContent}
            setnewTitle={setnewTitle}
            setnewContent={setnewContent}
            handelSubmit={handelSubmit}
            navigate={navigate}
            menuBar={menuBar}
        />}  />

        <Route path='/about' element={<About  
                menuBar={menuBar}
                />} 
        />
        
        <Route path='/contact' element={<Contact 
                menuBar={menuBar}
                />} 
        />
        <Route path='/showpost/:id' element={<ShowPost 
                     posts={posts}
                     menuBar={menuBar}
                     setposts={setposts}
                     allComments={allComments}
                     setallComments={setallComments}
                />}>
                  <Route path=':id' element={<ShowPost 
                                                posts={posts} 
                                                setposts={setposts} 
                                                menuBar={menuBar} 
                                                allComments={allComments}
                                                setallComments={setallComments}
                                              />}   
                  />
        </Route>
      </Routes>    
    </div>
  )
}

export default App;
