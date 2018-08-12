import React, {Component} from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd.js'
import FilterObject from '../Topics/FilterObject.js'
import FilterString from '../Topics/FilterString.js'
import Palindrome from '../Topics/Palindrome.js'
import Sum from "../Topics/Sum.js"
import Multiply from'../Topics/Multiply.js'


export default class TopicBrowser extends Component{
    Constructor(){

    }
    render(){
    return(
       <div>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Palindrome/>
            <Sum/>
            <Multiply/>
       </div>
    )
    }
}
