import React from "react";
import { FaLinkedinIn, FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";



function Footer () {
 return (
    <div>
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Produits</h3>
                        <ul>
                            <li><a href="#">Confitures</a></li>
                            <li><a href="#">Fruits séchés</a></li>
                            <li><a href="#">Fruits en conserve</a></li>
                            <li><a href="#">Miel</a></li>
                            <li><a href="#">Sirops et jus</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>A propos de nous</h3>
                        <ul>
                            <li><a href="#">Entreprise</a></li>
                            <li><a href="#">Equipe</a></li>
                            <li><a href="#">Carrière</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Melan's</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="FaFacebookF"><FaFacebookF/></i></a><a href="#"><i className="FaTwitter"><FaTwitter/></i></a><a href="#"><i className="FaGoogle"><FaGoogle/></i></a><a href="#"><i className="FaLinkedinIn"><FaLinkedinIn/></i></a></div>
                </div>
                <p className="copyright">Company Melan's © 2018</p>
            </div>
        </footer>
    </div>
    </div>
 );   
}

export default Footer;