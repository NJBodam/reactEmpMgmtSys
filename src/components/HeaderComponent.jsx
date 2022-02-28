import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
  render() {
    return (
      <div>
          <header>
              <nav className="navbar">
                  <div><a href="https://relaxed-kirch-802d87.netlify.app/?#" className="navbar-brand" >Employee Management App</a></div>
              </nav>
          </header>
      </div>
    )
  }
}
