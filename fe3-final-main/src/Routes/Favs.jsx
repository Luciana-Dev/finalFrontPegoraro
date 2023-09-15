import { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favs = () => {

  const [favoritos, setfavoritos] = useState([]);

  useEffect(()=>{
    let favoritosLocalStorage = JSON.parse(localStorage.getItem('favorites'));
    favoritosLocalStorage && setfavoritos(favoritosLocalStorage);
  },[]);

  const handlerDeleteFav = (id) => {
    let odontologo= favoritos.find(favo => favo.id === id );
    let nuevosFavorito = favoritos
    console.log(id, favoritos);
    if (odontologo) {
      nuevosFavorito = favoritos.filter(fav => fav.id !== id)
      console.log('eliminar');
    }
    localStorage.setItem('favorites', JSON.stringify(nuevosFavorito));
    setfavoritos(nuevosFavorito);
  }

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
      {favoritos.map((dentist) => 
      <Card handlerDeleteFav={handlerDeleteFav} key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>)} 
      </div>
    </>
  );
};

export default Favs;