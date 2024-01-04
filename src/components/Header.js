import logo from "../images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} />
                </div>
            </div>
        </div>
    )
}

export default Header;