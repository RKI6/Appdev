import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import CryptoJS from "crypto-js";
import "./Log_Reg.css";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    console.log(data);
    const URL = "http://localhost:8080/" + data.id;
    console.log(URL);
    try {
      const response = await axios.get(URL);
      const myObj = response.data;
      console.log(myObj);
      const enteredPassword = data.password;
      const enteredHashPassword = CryptoJS.SHA256(enteredPassword).toString(
        CryptoJS.enc.Hex
      );

      if (enteredHashPassword === myObj.password) {
        console.log("success");
      } else {
        console.log("Entered Password:", enteredPassword);
        console.log("Entered Hash Password:", enteredHashPassword);
        console.log("Actual Password:", myObj.password);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="container-fluid vh-100 bg-dark d-flex">
      <div className="bg-img-login"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container-login">
        <div className="row gap-0 p-5 h-75 w-100 d-flex align-items-end text-light">
          <div className="col-md-12 login-text text-center">LOGIN</div>
          <div className="col-sm-4 ">

            <label>ID</label>
          </div>
          <div className="col-sm-6 ">
            <input
              {...register("id")}
              placeholder="ENTER ID"
              className="custom-input text-center"
            />
          </div>
          <div className="col-sm-4 ">
            {" "}
            <label>PASSWORD</label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="password"
              {...register("password")}
              placeholder="ENTER PASSWORD"
              className=" custom-input text-center"
            />
          </div>
          <div className="col-sm-4 mb-2">
            <label htmlFor="Name">category</label>
          </div>
          <div className="col-sm-6">
            <select
              {...register("category")}
              className="text-center form-control category"
            >
              <option value="judge">Judge</option>
              <option value="lawyer">Lawyer</option>
              <option value="people">People</option>
            </select>
          </div>
          <div className="col-sm-12 text-center">
            <button className="btn btn-outline-info ">LOGIN</button>
            <div className="col-sm-12 mt-3">
              <Link
                to={"/register"} className="text-secondary"
                style={{ textDecoration: "none", fontStyle: "oblique" }}
              >
                New User ? REGISTER
              </Link>
            </div>
          </div>
          
        </div>
        {/*row*/}
      </form>
    </div>
  );
}

export default Login;
