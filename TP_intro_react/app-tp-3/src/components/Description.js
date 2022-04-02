import React from "react";
import Timer from './Timer'
class Description extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <section>
                <p>Bonjour {this.props.name} vous êtes bien beau aujourd'hui</p>
                <Timer />
            </section>
            
            );
        }
    }
    
    export default Description; // le composant pourra être importé dans un autre composant