import React from "react";
import {Routes, Route} from "react-router-dom";
import {TaskProvider} from "./context/TaskProvider";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import TaskManagement from "./pages/TaskManagement";
import Rules from "./pages/rules";
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <TaskProvider>
            <Header/>
            <div className="my-[3rem]">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tasks" element={<TaskManagement/>}/>
                    <Route path="/rules" element={<Rules/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
            <Footer/>
        </TaskProvider>
    );
}

export default App;