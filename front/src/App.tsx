
import { Routes ,Route,Navigate } from 'react-router-dom';
import loadable from "@loadable/component";


const LogIn=loadable(()=> import('./pages/Login'));
// const SignUp =loadable(()=> import('@pages/SignUp'));
const Group = loadable(()=>import('./pages/Group'));
const MyChat = loadable(()=>import('./pages/MyChat'));
const MyProfile = loadable(()=>import('./pages/MyProfile'));
const Private = loadable(()=>import('./pages/Private'));


function App() {
    console.log("APP");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path = '/login' element={<LogIn/>}/>
        {/*<Route path = '/signUp' element={<SignUp/>}/>*/}
        <Route path = '/group' element={<Group/>}/>
        <Route path = '/mychat' element={<MyChat/>}/>
        <Route path = '/myprofile' element={<MyProfile/>}/>
        <Route path = '/private' element={<Private/>}/>
    </Routes>

  )
}

export default App
