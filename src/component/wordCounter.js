import React from 'react';
import OutputScreen from './outputScreen.js';
import InputScreen from './inputScreen.js';
import Button from './button.js';

class WordCounter extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      wordlist: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick()
  {
    const map = new Map();
    const whitespacePattern = /\s+/;
    const wordArray = this.state.input.trim().split(whitespacePattern);
    const len = wordArray.length;

    for(var i = 0; i < len; i++ )
    {
      var key = wordArray[i];
      if(map.has(key))
      {
        var cur = map.get(key);
        map.set(key, cur + 1);
      } else {
        map.set(key, 1);
      }
    }

    var wordListArray = [];
    map.forEach((v, k) => {
      // console.log("v=" + v);
      // console.log("k=" + k);
      wordListArray.push({k, v});
    });

    this.setState({wordlist: wordListArray});
  }

  handleChange(event)
  {
    const input = event.target.value;
    this.setState({input: input});
  }

  render()
  {
    return (
      <div className="app" >
        <div className="inputScreen">
        <InputScreen handleChange={this.handleChange} />
        </div>
        <div className="outputscreen">
          <OutputScreen wordlist={this.state.wordlist} />
        </div>
        <Button label={'Submit'} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default WordCounter;
