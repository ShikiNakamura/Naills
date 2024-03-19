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

      </div>
    </header>
  );
}

export default Header;
