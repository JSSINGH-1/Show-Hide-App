import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {checking: true, second: true}

  firstName = () => {
    this.setState(prevState => ({checking: !prevState.checking}))
  }

  lastName = () => {
    this.setState(prevState => ({second: !prevState.second}))
  }

  render() {
    const {checking} = this.state
    const {second} = this.state
    console.log(checking)

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="button-container">
          <div className="button-one">
            <button type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {checking ? <p>Joe</p> : ''}
          </div>

          <div className="button-tow">
            <button type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {second ? <p>Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
