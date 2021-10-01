import { Component } from "react";

const styles ={
    button:{
        backgroundColor: '#0A283E',
        color: 'white',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer'
    }
}

export default class Button extends Component {
    render(){
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}