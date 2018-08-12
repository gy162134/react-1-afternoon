import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.palTest =  this.palTest.bind(this)
    }

    handleChange(e){
        this.setState({userInput: e})
        
    }

    palTest(val){
        var testStr = this.state.userInput.split("")
        var bkArr = []
        var score = 0
        for(var i =0; i<testStr.length;i++){
            bkArr.unshift(testStr[i])
        }
       // console.log(testStr,bkArr)

        for(var j = 0; j<testStr.length; j++){
            if(testStr[j]===bkArr[j]){
                score ++
            }else{
                return this.setState({palindrome: "false"})
            }
        }
        if(score === testStr.length){
            this.setState({palindrome: 'true'})
        }

    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.palTest(this.state.userInput)}>Test!!</button>
            <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

