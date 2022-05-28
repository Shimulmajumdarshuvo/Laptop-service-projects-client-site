
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Home/Login/Login';
import SignUp from './Pages/Home/Login/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/Home/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Home/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBord from './Pages/DashBord/DashBord';
import MyOrder from './Pages/DashBord/MyOrder';
import AddReview from './Pages/DashBord/AddReview';
import MyProfile from './Pages/DashBord/MyProfile';
import Profile from './Pages/MyProfile/Profile';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='myprofile' element={<Profile></Profile>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>

            <Purchase></Purchase>

          </RequireAuth>

        }></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <DashBord></DashBord>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
