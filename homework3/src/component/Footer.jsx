import "bootstrap/dist/css/bootstrap.min.css";
import "../css/footer.css";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row content">
                    <div className="col-md-4 logo col-12">
                        <img src="../../image/logo.svg" alt="logo"/>
                    </div>
                    <div className="col-md-2">
                        <h2 className="mb-4">Product</h2>
                        <ul>
                            <li><a href="#">Authgear</a></li>
                            <li><a href="#">Authgear</a></li>
                            <li><a href="#">Authgear</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h2 className="mb-4">Services</h2>
                        <ul>
                            <li><a href="#">Digital Product Development</a></li>
                            <li><a href="#">Digital Product Development</a></li>
                            <li><a href="#">Digital Product Development</a></li>
                            <li><a href="#">Digital Product Development</a></li>
                            <li><a href="#">Digital Product Development</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h2 className="mb-4">Know More</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h2 className="mb-4">Connect</h2>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright row justify-content-between mx-1">
                    <p>hello@oursky.com</p>
                    <p>© Oursky Ltd.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;