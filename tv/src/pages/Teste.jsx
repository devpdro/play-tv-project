import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 1s linear infinite;
    margin-right: 10px;
  }
`;

function Teste() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate("/books");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner>
          <div className="spinner"></div>
          Carregando...
        </LoadingSpinner>
      ) : (
        <div>
          <h1>Sei não</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            ducimus soluta laudantium facere perferendis ut impedit! Deleniti
            sit, dicta velit quae ullam quod id esse, consequuntur temporibus
            veritatis aspernatur voluptas.
          </p>
        </div>
      )}
    </div>
  );
}

export default Teste;
