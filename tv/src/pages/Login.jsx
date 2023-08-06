import React, { useState } from "react";

import { Container } from "./StyledLogin";

import { FaArrowLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { users } from "../data/db";

function Login() {
  const navigate = useNavigate();
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleImageClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowLoginButton(true);
    }, 350);
  };

  return (
    <Container>
      <div>
        <FaArrowLeft className="icon" onClick={handleGoBack} />
        <h1>Quem está assistindo?</h1>
        <div className="box_login">
          {users.map((user, index) => (
            <div className="box_img" key={index}>
              <img
                onClick={handleImageClick}
                className="img"
                src={user.img}
                alt={user.caption}
              />
              <h4>{user.caption}</h4>
            </div>
          ))}
        </div>
        {isLoading ? (
          <div className="box_login">
            <span className="spinner" />
          </div>
        ) : showLoginButton ? (
          <div className="box_login">
            <button onClick={handleGoBack} className="login_button">
              Obrigado por fazer o login!
            </button>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export default Login;
