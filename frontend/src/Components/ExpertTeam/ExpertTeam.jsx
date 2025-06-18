import React from "react";
import expertteamimage from "../../assets/expertTeam.png"
import './ExpertTeam.css'; 

const ExpertTeam = () => {
  return (
    <div className="fidesexpert-team">
      
        <div className="fidesexpert-team-details">
          <h2 className="fidesexpert-team-title outfit">Building with Expertise</h2>
          <p className="fidesexpert-team-description sanserif">
           Whether you require a dedicated onshore team, a seamlessly integrated
          offshore solution, or a hybrid model, FidesPath delivers. We leverage
          our global network of skilled developers to assemble the perfect team
          for your project, ensuring the highest quality standards and efficient
          execution.
          </p>
        </div>
        <div className="fidesexpert-team-image">
          <img src={expertteamimage} alt="Fides Expert Team" />
        </div>
      </div>
  
  );
};

export default ExpertTeam;
