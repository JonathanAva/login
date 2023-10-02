import React, { useState } from "react";
import { Tabs, Tab, TextField } from "@mui/material";
import "./style.scss"
import "./styles.css"
import SignUp from "./Register";
import LogIn from "./Login";


const AuthForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="form">
      <Tabs
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={handleTabChange}
      >
        <Tab
          label="Registrate"
          className="tab"
          style={{ color: "white" }} 
        />
        <Tab
          label="Iniciar sesión"
          className="tab"
          style={{ color: "white" }} 
        />
      </Tabs>

      <div className="tab-content">
        {activeTab === 0 && (
          <SignUp
            inputValues={inputValues}
            handleInputChange={handleInputChange}
          />
        )}
        {activeTab === 1 && <LogIn />}
      </div>
    </div>
  );
};

export default AuthForm;
