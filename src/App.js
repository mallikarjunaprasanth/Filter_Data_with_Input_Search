import CheckData from "./BackendData";
import React, { useState } from "react";
// import axios from "axios";
import "./App.css";
import Another from "./Another";

function App() {
  const [name, setName] = useState("");
  const { productOrder } = CheckData;

  const checkData = productOrder.filter((val) => {
    if (val.orderNumber.includes(name)) {
      return val;
    }
  });

  console.log("checkData", checkData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      document.getElementById("errorMsg").innerHTML = "Enter Order Number";
      return true;
    } else if (name === checkData[0].orderNumber) {
      alert("Order Number is Working");
      document.getElementById("errorMsg").innerHTML = "";
    } else {
      document.getElementById("errorMsg").innerHTML =
        "Order Number is Not Valid";
    }
  };

  return (
    <div className='row'>
    
    

      <div className="col-6" style={{ position: "absolute", left: "20%", top: "30%" }}>
        <p>Check Order Number -1</p>
        <form>
          <input
            type="text"
            id="OrderId"
            value={name}
            className="form-control mb-3 fontMontserrat_Values"
            onChange={(e) => setName(e.target.value)}
          />

          <p className="text-danger" id="errorMsg" style={{ color: "red" }}></p>
          <div className="d-grid gap-2">
            <input
              type="submit"
              className="btn btn-primary fontMontserrat_Items"
              value="NEXT"
              onClick={handleSubmit}
            />
          </div>
          {checkData.map((x) => (
            <p className="p-2">
              {" "}
              {x.orderNumber} <br /> <br />
            </p>
          ))}
        </form>
      </div>
      <div className='col-6'>
        <Another/>
      </div>
    </div>
  );
}

export default App;
