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
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a href="/media/pdf/dummy.pdf" target="_blank">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
