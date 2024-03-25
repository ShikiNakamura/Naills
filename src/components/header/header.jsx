import "./header-styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_row">
          <div className="name">
            <a className="label" href="#">
              <h2>THE NAIL STUDIO</h2>
            </a>
          </div>

          <div className="nav">
            <a className="home" href="#">
              <p>Home</p>
            </a>
            <a className="services" href="#">
              <p>Services</p>
            </a>
          </div>
        </div>

        <div className="slogan">
          <div className="welcome">
            <p>WELCOME TO THE NAIL STUDIO</p>
          </div>

          <div className="beauty">
            <p>BEAUTY</p>
          </div>

          <div className="start">
            <p>STARTS WITH NAILS</p>
          </div>

          <div className="moto">
            <p>
              "we believe that every manicure and pedicure should be an
              experience to remember"
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
