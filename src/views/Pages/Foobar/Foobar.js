import React, { Component } from 'react';

class Foobar extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                this is foobar!!yaiiyad
 
                
          <input 
                    type="text"
                    name="mainOther" />
          <input
                    onChange={(event) => { this.setState({ input: event.target.value }) }}
                    type="text"
                    name="main" />
                    
          <input
                    type="text"
                    name="mainMan" />
            </div>
        );
    }
}

export default Foobar;
