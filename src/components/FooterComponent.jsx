import React, { Component } from 'react'

export default class FooterComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {

        }
    }
  render() {
    var date = new Date();
    
    return (
      <div>
          <footer className="footer">
          <span className="text-muted">All Rights Reserved {date.getFullYear()} @JerryBodam</span>
          </footer>
      </div>
    )
  }
}
