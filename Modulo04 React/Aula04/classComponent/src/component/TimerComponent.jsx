import { Component } from "react";

class TimerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contagem: 0
        }
    }
    //ao montar
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState( prevState => ({
                contagem: prevState.contagem + 1
            }))
        }, 1000)
    }

    //ao atualizar
    componentDidUpdate() {
        console.log(`O componente foi atualizado para: ${this.state.contagem}`)
    }

    //ao desmontar
    componentWillUnmount(){
        clearInterval(this.timerId)
        console.log(`Timer limpo`)
    }

    render(){
        return (
            <h1>{this.state.contagem}</h1>
        )
    }
}

export default TimerComponent