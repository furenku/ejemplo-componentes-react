import React from 'react'
import CabeceraPrincipalVista from './CabeceraPrincipalVista';

class CabeceraPrincipal extends React.Component {

    state = {
        mostrar: true
    }

    alternarVisibilidadCabeceraMovil = (e) => {
        // haz que se oculte        
        this.setState({
            mostrar: ! this.state.mostrar
        })
    }


    render() {
        return (
            <CabeceraPrincipalVista
                mostrar={this.state.mostrar}
                alternarVisibilidad={this.alternarVisibilidadCabeceraMovil}
            />
        )
    }

}

export default CabeceraPrincipal;