import "./App.css";
import Header from "../Components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import {LandPage} from "../pages/LandPage";
import {useEffect, useState} from "react";
import {SignInPage} from "../pages/SignInPage";
import {SignUpPage} from "../pages/SignUpPage";
import Footer from "../Components/Footer";
import {CoursesPage} from "../pages/CoursesPage";
import {InstructorsPage} from "../pages/InstructorsPage";
import {SingleCoursePage} from "../pages/SingleCoursePage";
import {MyCoursesPage} from "../pages/MyCoursesPage";

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    let navigate = useNavigate();


    function signIn(data: any) {
        setCurrentUser(data.user);
        localStorage.token = data.token;
    }

    function signOut() {
        setCurrentUser(null);
        localStorage.removeItem('token');
        navigate('/sign-in');
    }

    useEffect(() => {
      if(localStorage.token){
        fetch(`http://localhost:1234/validate/user`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              signIn(data);
            }
          });
    }}, []);


    return (
        <div className="bg-gray-100 h-full">
            <Header currentUser={currentUser} signOut={signOut}/>

            <Routes>
                <Route path="/" element={<LandPage/>}/>

                <Route path="/courses" element={<CoursesPage/>}/>

                <Route path="/instructors" element={<InstructorsPage/>}/>

                <Route path="/courses/:id" element={<SingleCoursePage/>}/>

                <Route path="/my-courses" element={<MyCoursesPage currentUser={currentUser}/>}/>

                <Route
                    path="/sign-in"
                    element={<SignInPage signIn={signIn}/>}
                />

                <Route
                    path="/sign-up"
                    element={<SignUpPage signIn={signIn}/>}
                />
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
