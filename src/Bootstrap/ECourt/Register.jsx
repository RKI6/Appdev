import React from "react";
import { Form, useForm } from "react-hook-form";
import "./Log_Reg.css";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    postToDataBase(data);
    console.log(data);
    
  };
  function postToDataBase(data)
  {
    const URL = "http://localhost:8080/";
        const response = axios.post(URL , data).then(response =>{console.log(response)}).catch(error => {
            console.log(error);
        });
  }
  // console.log(watch("nameField"))
  return (
    <div className="container-fluid vh-100 bg-dark d-flex">
      <div className="bg-img-register"></div>
        <form onSubmit={handleSubmit(onSubmit)}className="form-container-register">
          <div className="row gap-0 text-center p-5 h-75 w-100 d-flex align-items-end text-light">
        <div className='col-md-12 text-info fs-2 '>REGISTER</div>
            <div className="col-sm-4">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
            </div>
            <div className="col-sm-6">
              <input
                placeholder="ENTER NAME"
                {...register("name")}
                className="custom-input"
              />
            </div>
          
            <div className="col-sm-4">
              <label htmlFor="Name" className="form-label">
                Bar Council ID
              </label>
            </div>
            <div className="col-sm-6">
              <input
                placeholder="ENTER ID"
                {...register("id")}
                className="custom-input"
              />
            </div>
          
            <div className="col-sm-4">
              <label htmlFor="" className="form-label">
                Password
              </label>
            </div>
            <div className="col-sm-6">
              <input
                placeholder="ENTER PASSWORD"
                {...register("password")}
                className="custom-input"
                type="password"
              />
            </div>
         
            <div className="col-sm-4">
              <label htmlFor="Name">e Mail</label>
            </div>
            <div className="col-sm-6">
              <input
                type="email"
                {...register("mail")}
                className="custom-input"
                placeholder="ENTER EMAIL"
              />
              {errors.eMail && <span>Error in Mail</span>}
            </div>
        
            <div className="col-sm-4">
              <label htmlFor="Name">category</label>
            </div>
            <div className="col-sm-6">
              <select
                {...register("category")}
                className=" btn-info form-control category text-center"
              >
                <option value="judge">Judge</option>
                <option value="lawyer">Lawyer</option>
                <option value="people">People</option>
              </select>
            </div>
        
            <div className="col-sm-12 ">
              <button className="btn btn-outline-info ">REGISTER</button>
            </div>
          </div>
        </form>
      {/* </div> */}
    </div>
  );
}

export default Register;
