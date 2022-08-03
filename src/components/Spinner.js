import React, { Component } from 'react'
import loader from "../components/assets/load.gif"



export default class Spinner extends Component {
  render() {
    return (
      <div>
          <div className="text-center pt-4">
        <img src={loader} alt="" style={{width:'70px'}}/>

        </div>
      </div>
    )
  }
}
