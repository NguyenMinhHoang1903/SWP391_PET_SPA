import { Link } from "react-router-dom";

const Header = ({user}) => {
  return (
    <div className="navbar-container">
    <div className="navbar">
      <div className="navbar-left">
        <div>
        <Link className="link" to = "/"><img src="Logo.png" alt="LogoPet" /></Link> 
        </div>
        
          <div>
          <Link className="link" to = "/">Home</Link>
          </div>
          <div>
          <Link className="link" to = "/booking">Booking Spa</Link>
            </div>
          <div>Review Combo</div>
          <div>Member</div>
          </div>
          
          <div >
          {
          user ? (
            <ul classname="navbar-right flex items-center gap-4">
              <div className="listItem">
              </div>
              <div className="listItem" style={{color: "white"}}>{user.displayName}</div>
              <div className="listItem" style={{backgroundColor: "black" , color: "white", textAlign: "center"}}>
                Logout
              </div>
            </ul>
          ) : (<Link className="login-button flex items-center gap-4" to ="login">Login</Link>)
    }
          </div>

      </div>
    </div>
        );
    };
export default Header;