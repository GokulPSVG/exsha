import { Route, Routes, useNavigate } from 'react-router-dom';
import Posts from './Posts';
import Home from './Home';
import About from './About';
import { useState } from 'react';
import Contact from './Contact';

function App() {
  const [posts,setPosts]=useState([{id:1,title:'WELCOME',content:'Create your first post'}])
  const [newTitle,setnewTitle]=useState('')
  const [newContent,setnewContent]=useState('')
  const [menuBar,setmenuBar]=useState(false)
  const navigate=useNavigate()

  const handelSubmit=(e)=>{
      e.preventDefault()
      const id=posts.length ? posts[posts.length-1].id+1 : 1
      const newPost={id:id,title:newTitle,content:newContent}
      const modPost=[...posts,newPost]
      setPosts(modPost)
      localStorage.setItem('exsha',JSON.stringify(modPost))
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
      <Routes>
        <Route path='/' element={<Home 
            posts={posts}
            menuBar={menuBar}
            setmenuBar={setmenuBar}
            handelMenu={handelMenu}
        />} />
        
        <Route path='/newPost' element={<Posts 
            newTitle={newTitle}
            newContent={newContent}
            setnewTitle={setnewTitle}
            setnewContent={setnewContent}
            handelSubmit={handelSubmit}
            navigate={navigate}
        />}  />

        <Route path='/about' element={<About 
                handelMenu={handelMenu}  
                menuBar={menuBar}
                />} 
        />
        
        <Route path='/contact' element={<Contact 
                handelMenu={handelMenu} 
                menuBar={menuBar}
                />} 
        />
      </Routes>    
    </div>
  )
}

export default App;
