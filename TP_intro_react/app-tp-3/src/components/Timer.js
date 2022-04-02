import React from "react";
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }
    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }
    componentDidMount() { 
        this.interval = setInterval(() => this.tick(), 1000); 
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <p>vous êtes sur cette page depuis {this.state.seconds} secondes.
            </p>
            );
        }
    }
    
    export default Timer; // le composant pourra être importé dans un autre composant