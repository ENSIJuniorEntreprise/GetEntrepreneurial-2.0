import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import Glance from './Pages/Glance/Glance';
import Program from './Pages/Program/Program';
import Inscri from './Pages/Inscri/Inscri';
import Participant from './Pages/Participant/Participant';
import Exposant from './Pages/Exposant/Exposant';
import Collab from './Pages/collab/collab';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import LoginForm from './LoginForm';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Loader from './Components/Loader/Loader';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Article from './Pages/Article/Article';
import CollabHandler from './Pages/CollabHandler/CollabHandler';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthProvider>
      <Router>
        {/* Routes avec Navbar et Footer */}
        <Routes>
          <Route
            path="/Get-Entrepreneurial"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/program"
            element={
              <>
                <Navbar />
                <Program />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <LoginForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/Glance"
            element={
              <>
                <Navbar />
                <Glance />
                <Footer />
              </>
            }
          />
          <Route
            path="/Register"
            element={
              <>
                <Navbar />
                <Inscri />
                <Footer />
              </>
            }
          />
          <Route
            path="/Collab"
            element={
              <>
                <Navbar />
                <Collab />
                <Footer />
              </>
            }
          />

          {/* Routes sans Navbar ni Footer */}
          <Route path="/Register1" element={<Participant />} />
          <Route path="/Register2" element={<Exposant />} />

          {/* Routes protégées */}
          <Route
            element={<PrivateRoute />}
          >
            <Route path="/Article" element={<Article />} />
            <Route path="/Dash" element={<Dashboard />} />
            <Route path="/CollabHandler" element={<CollabHandler />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
