import React from "react";
import { Link } from "react-router-dom";

const Card = ({name, username, id, handlerDeleteFav=null, handlerAddOdonto=null}) => {

      
  return (
      <div className="card">
        <Link to={`/detail/${id}`}>
        <img src='/images/doctor.jpg' alt="medico-avatar" className="img-card" />
        <h2>{name}</h2>
        <h3>{username}</h3>      
        </Link>
        {
         handlerDeleteFav ? <button onClick= {() => handlerDeleteFav(id) } className="favButton">
          Eliminar de Favoritos
        </button>
        :
        <button onClick= {()=> handlerAddOdonto({id, username, name})} className="favButton">
          Agregar a Favoritos 
        </button>
        }
        
      </div>
    );
  };
  
  export default Card;
