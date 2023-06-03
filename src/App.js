import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import FirstPage from "./home_page/first_page"
import SecondPage from "./home_page/second_page"

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <div>
        <div>Ciao Martillo & Nena!!</div>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstPage/>
        <SecondPage/>
      </div>
    );
  }
}

export default App;
