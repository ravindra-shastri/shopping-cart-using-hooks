import React from "react";
import Main from "./Main";
import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <div>
          <Main />
        </div>
      </>
    )
  }
}

export default App;
