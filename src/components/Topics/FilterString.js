import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: ["Garrett", 'Eric', 'Jay', "Ashley", 'Logan', 'Erik', 'Spencer'],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(e){
        this.setState({userInput:e})
    }

    filtStr(val){
        var unfilt = this.state.unFilteredArray
        var filt = []

        for(var i=0;i<unfilt.length;i++){
            if(unfilt[i].includes(val)){
                filt.push(unfilt[i])
            }
        }
        this.setState({filteredArray: filt})
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filtStr(this.state.userInput)}>Filter!!</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
