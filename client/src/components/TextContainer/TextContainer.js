import React,{useEffect} from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => {
 
  return (
    <div className="textContainer">
      
      
      {users ? (
        <div>
          {users.length>1?
          <h1>{`${users.length} Participants`}</h1>
          :<h1>{`${users.length} Participant`}</h1>}
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <h3 key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </h3>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
