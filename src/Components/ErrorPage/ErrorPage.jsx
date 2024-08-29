import { Link } from "react-router-dom";
import error from "../../../public/Images/ErrorPage.jpeg"

const ErrorPage = () => {
    return (
        <div>
            <img className="w-[700px] ml-60" src={error} alt="" />
            <Link to='/' className="btn bg-teal-600 text-white hover:text-teal-600 hover:bg-white p-4 text-center ml-[600px]">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;