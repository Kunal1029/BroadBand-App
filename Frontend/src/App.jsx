// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/OtherComponents/Layout';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Plan from './components/Plans/Plan';
import MainAbout from './components/About/MainAbout';
import MainPlan from './components/Plans/MainPlan';
import MainContact from './components/Contact/MainContact';
import NewUserRegister from './components/RegisterLogin/NewUserRegister';
import UserLogin from './components/RegisterLogin/UserLogin';
import DataCheckUp from './DataCheckUp.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="plans" element={<Plan />} />
                    <Route path="mainabout" element={<MainAbout />} />
                    <Route path="mainplan" element={<MainPlan />} />
                    <Route path="maincontact" element={<MainContact />} />
                    <Route path="register" element={<NewUserRegister />} />
                    <Route path="login" element={<UserLogin />} />
                    <Route path="/lol" element={<DataCheckUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
