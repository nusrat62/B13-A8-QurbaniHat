import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";


const MainLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default MainLayout;