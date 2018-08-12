import React, {Component} from 'react'

export default class Multiply extends Component{
    constructor(){
        super();

        this.state = {
            number1 : 0,
            number2 : 0,
            prod : null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)

    }

    handleChange(e){
        this.setState({number1: parseInt(e, 10)})
        
    }
    handleChange2(e){
        this.setState({number2: parseInt(e, 10)})
        
    }
    sums(num1, num2){
        var numb1 = this.state.number1
        var numb2 = this.state.number2

        var prod = numb1*numb2

        this.setState({prod})

    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Product Calculator</h4>
            <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
            <input className="inputLine" onChange={e => this.handleChange2(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.sums(this.state.number1, this.state.number2)}>Multiply!!</button>
            <span className="resultsBox">Product: {this.state.prod}</span>
            </div>
        )
    }
}