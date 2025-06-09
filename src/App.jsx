import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import { NotFound } from './pages/NotFound';

const  Home = lazy( ()=> import ('./pages/Home'));
const  Login = lazy( ()=> import ('./pages/Login'));
const  Chat = lazy( ()=> import ('./pages/Chat'));
const  Groups = lazy( ()=> import ('./pages/Groups'));

let user = false;
// This is a placeholder for user authentication status.
 const App = () => {

  
  return (
   <Routes>
    <Route element={<ProtectedRoute user={user}/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/chat/:chatId" element={<Chat/>}/>
    <Route path="/groups" element={<Groups/>}/>
    </Route>
    <Route path="/login" element={<ProtectedRoute user={!user} redirect='/'><Login/></ProtectedRoute>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
  )
}

export default App;