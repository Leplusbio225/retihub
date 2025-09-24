import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../components/pages/Home";

export default function MainLayout() {
    return (
        <>
            <Navbar/>
            <Home />
            <Footer />
        </>
    )
}