import NavBar from "@/components/shared/NavBar";


const AuthLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            <main>{children}</main>
        </div>
    );
};

export default AuthLayout;