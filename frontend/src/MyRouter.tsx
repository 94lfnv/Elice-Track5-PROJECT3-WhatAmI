import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomSpinner from './components/loader/CustomSpinner';
import Nav from './components/nav/Nav';

const MainPage = lazy(() => import('./pages/MainPage'));
const Community = lazy(() => import('./pages/CommunityPage'));
const ReviewBoard = lazy(() => import('./pages/ReviewBoardPage'));
const Login = lazy(() => import('./pages/LoginPage'));
const Register = lazy(() => import('./pages/RegisterPage'));
const LikedCommunity = lazy(() => import('./pages/LikedCommuPage'));

const MyRouter = () => {
  return (
    <Suspense fallback={<CustomSpinner />}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/board" element={<ReviewBoard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/likedcommunity" element={<LikedCommunity />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
