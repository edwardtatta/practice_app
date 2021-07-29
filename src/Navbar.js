//A component is a function that returns a jsx template and a function is exported at the end of the file
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>
                <Link to='/'>The Blog</Link>
            </h1>
            <div className="links">
                <Link to="/create"> New Blog </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;