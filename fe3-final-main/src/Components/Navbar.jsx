import React from 'react';
import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch, state} = useContextGlobal(); 
  const theme = state.theme;

  const handlerChangeTheme = () => {
    if (theme) {
      dispatch(
        {type: 'light'
      })
    } else 
    dispatch(
      {type: 'dark'
    })
  }
  console.log(state.theme);
  
  return (
    <>
    <p className='nombre'> DH Odonto </p>
    <nav className='nav'>
     <ul>
          <li ><Link to="/" className='Link'> Inicio </Link> </li>
          <li ><Link to="/contact" className='Link'> Contacto </Link></li>
          <li ><Link to="/favoritos" className='Link'> Favoritos </Link> </li>
          <li><button onClick={handlerChangeTheme}>Cambiar tema{
              state.theme === 'dark' || !state.theme ? <>🌑</> : <>🌕</>
            }</button></li>
     </ul>
      
  </nav>
    </>
  )
}

export default Navbar