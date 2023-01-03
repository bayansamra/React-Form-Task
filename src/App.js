import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import {RoutesAll} from './secRouts'
import GameControl from "./components/GameControl/index";


class App extends Component {
  render(){
    return(
      <>
        <Routes>
          <Route path='/*' element={<RoutesAll />} />
          <Route path="/GameControl" element={<GameControl />} />

        </Routes>
      </>
    )
  }
}

export default App;


