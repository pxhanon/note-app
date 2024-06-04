import "./intro.css";

import Header from "../../components/header/Header";
import Feature from "../../components/feature/Feature";
//import Howto from "../../components/howto/Howto";
import Contact from "../../components/contact/Contact";


export default function Intro() {
    return (
        <div className="intro">
            <Header />
            <Feature />
            <Contact />
        </div>
    )
}
