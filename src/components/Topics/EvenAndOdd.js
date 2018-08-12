import React, {Component} from 'react'

export default class EvenAndOdd extends Component{
constructor(){
    super();

    this.state = {
        evenArray : [],
        oddArray: [],
        userInput: ""
    }
this.doTheMath = this.doTheMath.bind(this)
this.handleChange = this.handleChange.bind(this)
}
handleChange(keyedVal){
    this.setState({userInput: keyedVal})
}

doTheMath(values){
    var arr = values.split(",")
    var evens = []
    var odds = []

    for(var i=0; i<arr.length; i++){
        if(Number(arr[i]) %2 === 0){
            evens.push(Number(arr[i]))
        }else{
            odds.push(Number(arr[i]))
        }
    }

    this.setState({evenArray: evens})
    this.setState({oddArray: odds})
}

render(){
    return(
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={() => this.doTheMath(this.state.userInput)}>Sort!!</button>
            <span className="resultsBox">Evens: {this.state.evenArray.join(", ")}</span>
            <span className="resultsBox">Odds: {this.state.oddArray.join(", " )}</span>
            
        </div>
    )
}
}