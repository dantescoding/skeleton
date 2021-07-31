import React from 'react';
import ReactDOM from 'react-dom'

// import image
import coco from './assets/coco.png'

class App extends React.Component {
  render(){
    return <img src={coco} width="105rem"/>
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
