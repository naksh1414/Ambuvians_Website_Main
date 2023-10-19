import Title from "./Title";
import AmbulanceTypes from "./AmbulanceTypes";
import HowItWorks from "./HowItWorks";
import Quotes from "./Quotes";
import CustomerSupport from "./CustomerSupport";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Service.css"
const Service = () => {
    return ( 
    <div className="main" style={{overflowX:"hidden"}} >
        <Navbar/>
        <Title/>
        <AmbulanceTypes />
        <HowItWorks/>
        <Quotes />
        <CustomerSupport/>
        <Footer/>
    </div>
    );
}
 
export default Service;