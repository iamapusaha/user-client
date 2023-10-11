import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Root = () => {
    return (
        <div>
            <h1>this is out root</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;