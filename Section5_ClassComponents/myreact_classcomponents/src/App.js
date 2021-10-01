import { Component } from "react"

class Button extends Component {
    state = {}
    constructor(props){
        super(props)
        console.log('constructor: ', props)
    }

    componentDidMount(){
        console.log('On Mount')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component did Update', prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('Unmounting Component', this.props, this.state)
    }

    render(){
        console.log('Executing render from button class')
        return(
            <button onClick={()=> this.setState({ prop: 1 })}>
                Send
            </button>
        )
    }
}



class App extends Component {
    state = {
        valor:3
    }
    render() {
        console.log(this.state)
        return(
            <div>
                <p>Hello world</p>
                { this.state.valor === '3' ? 
                    <Button piggy='Happy'/>
                    : null
                }
                <button className={`${this.state.valor}`} onClick={()=> this.setState({valor: 2})}>
                    Send in App
                </button>
                <button onClick={()=> this.setState({valor: 3})}>
                    Send in App 2
                </button>
            </div>
        )
    }
}

export default App;
