import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { LoadingSpinner } from "./StyledLoading";

import apps4 from "../data/db";

function Loading() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const filtering = apps4.filter((app) => app.caption === "BLACK");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner>
          {filtering.map((app, id) => (
            <div key={id}>
              <img className="img" src={app.img} alt={app.caption} />
              <div className="box_title">
                <div className="spinner"></div>
              </div>
            </div>
          ))}
        </LoadingSpinner>
      ) : (
        <div>
          <h1>Error 404</h1>
        </div>
      )}
    </div>
  );
}

export default Loading;
