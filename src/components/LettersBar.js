import React from "react"
import {Link} from 'gatsby'
import {alphabet} from '../utils/alphabet'

export default class LettersBar extends React.Component {
  render () {
  
  function loadLetters(arr) {
    for (var i = 0; i < arr.length; i++) {
      return arr.slice(i)
    }
  }
  
  const letters = loadLetters(alphabet)
  console.log(letters)
  
  return (
    <div className="eventBody" >
      {letters.map(letter => (<div>
          <Link to={letter}>
            {letter}</Link>
          </div>))}
    </div>
  )}
}