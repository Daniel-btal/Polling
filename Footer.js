import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <section className="section footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-2">
              <h6>Award Department</h6>
             < hr />
              <p className="text-white">
              A public election is a formal process in which eligible citizens cast votes to select individuals for public 
              office or to decide on specific public policies or issues. These elections are a fundamental component of democratic
               governance and serve as a means for the public to influence government decisions and leadership.
              </p>
            </div>
            <div className=" li col-md-4 text-white pt-2">
  <h6>Quick Links</h6>
  <hr />
  <div><Link to="/"className="link-custom-color">Home</Link></div>
  <div><Link to="/Login"className="link-custom-color">Login</Link></div>
  <div><Link to="/Vote"className="link-custom-color">Vote</Link></div>
  <div><Link to="/Result"className="link-custom-color">Result</Link></div> 
</div>
            <div className="col-md-4 pt-2">
                <h6>Address</h6>
                <hr />
                <div> <p className="text-white mb-1">#67821,G Street,Marthandam,India.</p></div>
                <div> <p className="text-white mb-1">pin code-629101.</p></div>
                <div> <p className="text-white mb-1">+91-9876543201.</p></div>
                <div> <p className="text-white mb-1">cricketdcc@gmail.com</p></div>
                
                
            </div>
          </div>
        </div>
      </section>
      
    );
}
export default Footer;
