import React from "react";
// import './Home.css'
import CasesCount from "./CasesCount";
import MyChatBot from "./MyChatBot";
function Home() {
  return (
    <>
    <div className="fullscreen-bg">
      {/* <img className="img-fluid"
        src="https://media.istockphoto.com/id/1488829375/photo/businessman-touching-screen-target-board-saving-money-wealth-and-financial-concept-business.jpg?s=612x612&w=0&k=20&c=T-Mp66_GFGAoUhYhdaw5AjsJbzV-rE5JsVvXUnsnpP8="
        alt=""
        /> */}
    </div>
    <div className="container-fluid pt-3 bg-dark text-center ">
        <div className="row p-2 gap-5 d-flex justify-content-center">
          <div className="col-md-3 text-light border border-warning-subtle rounded">
            <div className="container text-center"><p className="display-6 text-light">e Filing</p></div>
            <div className="container-fluid text-center text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis esse aliquam laudantium tempore, doloribus necessitatibus ipsa fugiat velit iure iste provident nisi eveniet eius illum facilis voluptate quasi consectetur.</div>
          </div>
          <div className="col-md-3 text-light border border-warning-subtle rounded">
            <div className="container text-center"><p className="display-6 text-light">e Filing</p></div>
            <hr class="bg-danger border-2 border-top border-warning my-4"/>

            <div className="container-fluid text-center text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis esse aliquam laudantium tempore, doloribus necessitatibus ipsa fugiat velit iure iste provident nisi eveniet eius illum facilis voluptate quasi consectetur.</div>
          </div>
          <div className="col-md-3 text-light border border-warning-subtle rounded">
            <div className="container text-center"><p className="display-6 text-light">e Filing</p></div>
            <div className="container-fluid text-center text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis esse aliquam laudantium tempore, doloribus necessitatibus ipsa fugiat velit iure iste provident nisi eveniet eius illum facilis voluptate quasi consectetur.</div>
          </div>
        </div>
    </div>
    <MyChatBot/>
    <CasesCount />
    <div className="container-fluid pt-3 bg-dark text-center ">
        <div className="row p-2 gap-5 d-flex justify-content-center">
        <div className="col-md-3 card shawdow bg-dark text-white border border-warning-subtle p-3">
          <img className = "card-image-top "src="https://th.bing.com/th/id/OIP.8sWZ6pEA-tfC5uvQNBaiPwHaEA?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
          <h5 className="card-title">e Filing</h5>
          <p className="card-text">File cases easily ...</p>          
          <a href="" className="btn btn-outline-warning">File</a>
        </div>
        <div className="col-md-3 card bg-dark text-white border border-warning-subtle p-3">
          <img className = "card-image-top "src="https://th.bing.com/th/id/OIP.8sWZ6pEA-tfC5uvQNBaiPwHaEA?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
          <h5 className="card-title">e commitee</h5>
          <p className="card-text">File cases easily ...</p>          
          <a href="" className="btn btn-outline-warning">File</a>
        </div>
        <div className="col-md-3 card bg-dark text-secondary border border-warning-subtle btn p-3">
          <img className = "card-image-top"src="https://www.shutterstock.com/image-photo/big-data-law-justice-analytics-600nw-1416583022.jpg" alt="" />
          <h5 className="card-title">status</h5>
          <p className="card-text">File cases easily ...</p>          
          <a href="" className="btn btn-outline-warning">File</a>
        </div>
        </div>
        </div>
        </>
  );
}

export default Home;
