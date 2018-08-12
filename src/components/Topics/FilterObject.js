import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {
                    name: 'Robert Culbert',
                    job: 'Receiving manager',
                    age: 26,
                  },
                  {
                    name: 'Rich',
                    age: 35,
                    hobby: 'League of Legends'
                  },
                  {
                    name: 'Garrett Yaworski',
                    job: 'Coding',
                    hobby: 'Leage of legends'
                  }
            ],
            userInput: "",
            filteredArray: []
        }

    }
    

handleChange(e){
    this.setState({userInput: e})
}

filterObj(e){
    var unfiltArr = this.state.unFilteredArray;
    var filtArr = [];

    for(var i = 0; i<unfiltArr.length;i++){
        for(var elm in unfiltArr[i]){
            if(elm === e){
                filtArr.push(unfiltArr[i])
            }
        }
    }
    this.setState({filteredArray: filtArr})
}

    render(){
        return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.filterObj(this.state.userInput)}></button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
        </div>
        )
    }
}
