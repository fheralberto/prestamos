import { Fragment } from 'react/cjs/react.production.min';

// function Header({titulo, descripcion, suma}) {
//   return(
//     <Fragment>
//       <h1>{ titulo }</h1>
//       <p>{ descripcion }</p>
//       <p>{ suma }</p>
//     </Fragment>
//   )
// }

const Header = ({ titulo }) =>{
  // Espacio para código .js

  return(
    // Área de código .jsx
    <Fragment>
      <h1>{ titulo }</h1>
    </Fragment>
  )
}

export default Header;