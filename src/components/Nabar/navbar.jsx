import './navbar.css'
function Navbar() {
  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <img src='/images/brand_logo.png' alt='logo'/>
        </div>
        <ul>
          <li href="/">Home</li>
          <li href="/">About</li>
          <li href="/">Terms</li>
          <li href="/">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
      
      
    </div>
  );
}

export default Navbar;
