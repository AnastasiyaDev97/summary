import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {NavBar} from "./components/NavBar/NavBar";

function App() {
    return (
        <div>
            <NavBar/>
            <div className={'mainContent'}>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
