import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textinput: "",
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState = (event) => {
    this.setState({ textinput: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.updateState}></input>
          <output type="text">{this.state.textinput}</output>
        </form>
      </div>
    );
  }
}

export default App;
