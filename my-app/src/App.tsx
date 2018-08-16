import * as React from 'react';
import './App.css';

import Compo1 from './Compo1';

interface IAppStates {
  state1: string;
};

class App extends React.Component<{}, IAppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      state1: 'hoge'
    }
  }
  public render() {
    const handleInputChange = (e: any) => {
      this.setState({
        state1: e.target.value
      });
    }
    return (
      <div className="App">
        <label>
          App:
          <input type="text" onChange={handleInputChange} />
        </label>
        {(() => {
          if (this.state.state1 !== 'hoge') {
            return <Compo1 prop1={this.state.state1} />
          } else {
            return <div>no compo1</div>;
          }
        })()}
      </div>
      );
    }
  }
  
  export default App;
