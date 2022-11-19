function Navbar() {
  return (
    <nav>
      <h1 className="title app-title">\(OwO)/</h1>
      <ul className="nav-container">
        <a href="/">
          <li className="nav-button">
            <lord-icon
              className="h-8 w-8"
              src="/lord-icon/home-icon.json"
              trigger="hover"
              colors="primary:#ffffff"
            />
            <p className="nav-desc">Home</p>
          </li>
        </a>
      </ul>
      <div className="divider" />
      <div className="nav-button logout-button">
          <lord-icon
            className="w-8 h-8"
            src="/lord-icon/logout-icon.json"
            trigger="hover"
            colors="primary:#f037a5"
          />
          <p className="nav-desc">Log Out</p>
      </div>
    </nav>
  )
}

export default Navbar;
