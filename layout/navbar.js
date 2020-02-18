const Navbar = () => {
  return (
    <nav className="nav" id="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
        <div class="nav-title ">
          <a href="/" className="nav-title-link">
            JoG
          </a>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="//github.io/jo_geek" target="_blank">
          About
        </a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank">
          Skills
        </a>
        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">
          Projects
        </a>
        <a href="https://codepen.io/jo_Geek/" target="_blank">
          Experience
        </a>
        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
          Contact
        </a>
        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
