import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Navi = () => {
  return (
    <Navbar style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h2>MovieLogo</h2>
      <div className='nav'>
        <h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/latest'>Latest</NavLink>
        </h1>
      </div>
    </Navbar>
  );
};

export default Navi;
