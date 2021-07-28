import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumb = () => Math.ceil(Math.random() * 100)

  onClickButton = () => {
    const random = this.getRandomNumb()
    this.setState(prevState => ({
      count: prevState.count + random,
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Count <span>{count}</span>
          </h1>
          <p>Count is {displayText}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.onClickButton}
          >
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
