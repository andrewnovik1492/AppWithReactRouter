import './styles/nav.scss';
import { NavLink } from 'react-router-dom'
function Navigation () {
    const setActive = ({ isActive }) =>(isActive ? " active" : "");
    return <nav className="navigation">
        <span>My application</span>
        <div className="link-list">
            <NavLink className={setActive} to="/">Main</NavLink>
            <NavLink className={setActive} to="/posts">Posts</NavLink>
            <NavLink className={setActive} to="/toDos">ToDOs</NavLink>
            <NavLink className={setActive} to="/albums">Albums</NavLink>
        </div>
    </nav>
}
export default Navigation