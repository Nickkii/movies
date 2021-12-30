import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (<>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">MOVIE ONLAIN</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Последние добавленные </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/popular">Популярные</a>
            </li>
            </ul>
            </div>
      </nav>
      </>
  )
};

export default Navbar;