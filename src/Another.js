import CheckData from "./BackendData";
import React, { useState } from "react";
// import axios from "axios";
import "./App.css";

function Another() {
  const [name, setName] = useState("");
   const { productOrder } = CheckData;

  const checkData = productOrder
    .filter((val) => {
      if (val.orderNumber.includes(name)) {
        return val;
      }
    }).map((x)=>x.orderNumber)
    
    console.log('checkData',checkData)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      document.getElementById("error_1").innerHTML = "Enter Order Number";
      return true;
    } else if (name === checkData[0]) {
      alert("Order Number is Working");
      document.getElementById("error_1").innerHTML = "";
    } else {
      document.getElementById("error_1").innerHTML =
        "Order Number is Not Valid";
    }
  };

  return (
    
    <div  style={{ position: "absolute", left: "60%", top: "30%" }}>
      <p>Check Order Number -2</p>
    <form >
      <input
        type="text"
        id="OrderId"
        value={name}
        className="form-control mb-3 fontMontserrat_Values"
        onChange={(e) => setName(e.target.value)}
      />

      <p className="text-danger" id="error_1" style={{ color: "red" }}></p>
      <div className="d-grid gap-2">
        <input
          type="submit"
          className="btn btn-primary fontMontserrat_Items"
          value="NEXT"
          onClick={handleSubmit}
        />
      </div>
   <p>{checkData}</p>
      </form>
    </div>
  );
}

export default Another;
