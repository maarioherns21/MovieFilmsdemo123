import './App.css';
import {Routes, Route, BrowserRouter, Navigate} from  "react-router-dom"
import Home from '../pages/Home/Home';
import FormPage from '../components/FormPage/FormPage';
import UserProfilePage from '../pages/SignupPage/UserProfilePage/UserProfilePage';
import Navbar from '../components/Navbar/Navbar';
import LoginPage from  "../pages/LoginPage/LoginPage"
import SignupPage from  "../pages/SignupPage/SignupPage"
import MovieDetails from '../components/Movies/MovieDetails/MovieDetails';
import Footer from '../components/Footer/Footer';
import useToken from '../components/useToken/useToken';
import SearchPage from '../pages/SearchPage/SearchPage';
import ApiMovieDetails from '../components/APIComponents/ApiMovieDetails/ApiMovieDetails';

function App() {
const {token, setToken, logout } = useToken();

  if (token) {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar logout={logout} />
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/movie/:id' element={<MovieDetails />} />
              <Route path='/api/movie/:id' element={<ApiMovieDetails />} />
              <Route path="/signup" element={<SignupPage setToken={setToken} />} />
              <Route path="/login" element={<LoginPage setToken={setToken} />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar logout={logout} />
        <div className="">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
             <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path="/login" element={<LoginPage setToken={setToken} />} />
            <Route path="/signup" element={<SignupPage setToken={setToken} />} />
            <Route path="/*" element={<Navigate to="/signup" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
