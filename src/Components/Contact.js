import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import Navbars from "./Navbars";

export default function Contact() {

  const [ShowActivity, set_ShowActivity] = useState('affichage_dynamique')

   const navigate = useNavigate();

  //  function onClick() {
  //    navigate("/")
  //  }

  return (
    <div classNameName="Contact">
      <Navbars />
      <div className="text-center p-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1986.3688177157971!2d-3.967864461238197!3d5.3035756693968805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMTgnMTIuOSJOIDPCsDU3JzU5LjciVw!5e0!3m2!1sfr!2sci!4v1689167554979!5m2!1sfr!2sci" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* <div className="p-5">
              <Button onClick={onClick} style={{ backgroundColor: "#1166A7", color: "white" }} >Retour à l'acceuil</Button>
            </div> */}
      </div>
      <div className="container my-5 py-5 z-depth-1 rounded-pill" style={{ background: "#F39F2D" }}>
      <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
              <h3 className="font-weight-bold">Contactez-nous</h3>
              <p className="text-muted">Côte d'Ivoire - Abidjan
                Marcory - Boulevard du Cameroun, Centre Commercial</p>
              <p><span className="font-weight-bold mr-2">Email : </span><a href="">pi@petroivoire.ci</a></p>
              <p><span className="font-weight-bold mr-2">Infoline : </span><a href="">+ 225 07 08 03 01 63 </a></p>
          </div>
         <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
            <div className="row">
                <div className="col-md-6">
              <div className="md-form md-outline mb-0">
                    <input type="text" id="form-first-name" className="form-control" placeholder="Votre nom" />
                  </div>
                </div>
              <div className="col-md-6">
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="form-last-name" className="form-control" placeholder="Votre prenom" />
                  </div>
                </div>
              </div>
              <div className="md-form md-outline mt-3">
                <input type="email" id="form-email" className="form-control" placeholder="Votre E-mail" />
              </div>
              <br />
           <div className="md-form md-outline">
                <input type="text" id="form-subject" className="form-control" placeholder="Votre sujet" />
              </div>
              <br />
            <div className="md-form md-outline mb-3">
                <textarea id="form-message" className="md-textarea form-control" rows="3" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
                <Button type="submit" variant="outline-primary">Envoyer</Button>
                {/* <button type="submit" className="btn btn-info btn-sm ml-0" style={{ backgroundColor: "#1166A7" }}><i className="far fa-paper-plane ml-2"></i></button> */}
              </div>
        {/* <div>
              <button onClick={onClick} style={{ backgroundColor: "#1166A7", color: "white" }} >Retour à l'acceuil</button>
            </div> */}
      </div>
    </section>
    </div>
    <Footer />
    </div>

  );
}