import { css } from 'linaria';
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div
          className={css`
            color: blue;
          `}
        >
          App
        </div>
      </React.Fragment>
    );
  }
}

export default App;
