import React from 'react';

const CabeceraPrincipalVista = (props) => (

    <header className="CabeceraPrincipal">
        {
            props.mostrar &&
            <div className="Logo">
                <img src="http://fakeimg.pl/300x200?text=logo" alt=""/>
            </div>
        }
        <button onClick={(e)=>props.alternarVisibilidad(e)}>
            { props.mostrar ? "Ocultar" : "Mostrar" }
        </button>
    </header>

)


export default CabeceraPrincipalVista;