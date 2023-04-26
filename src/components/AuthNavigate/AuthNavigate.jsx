import { Link } from "react-router-dom";


export const AuthNav = () => {
    return (
        <div>
            <Link to="/register">
                Register
            </Link>
            <Link to="/login">
                Log In
            </Link>
        </div>
    );
};