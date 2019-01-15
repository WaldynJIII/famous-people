import React, { Component } from 'react';
let famousName = ''
let famousRole = ''
class FamousPerson extends Component {
    // Called when the component is created
    constructor() {
        super();
        // Only assign to state one time!
        this.state = {
            name: 'Nicholas Cage',
            role: 'Benjamin Gates', // This isn't being used
        };
    };
    handleChange = (event) => {
        console.log(event.target.value);
        // Let's change state, which triggers render()
        this.setState({
            // event.target is the input field
            famousName: event.target.value
                
        });
    }
    randleChange = (event) => {
        console.log(event.target.value);
        // Let's change state, which triggers render()
        this.setState({
            // event.target is the input field
            famousRole: event.target.value

        });
    }
        render() {
            return (
                // Enclosing tag
                <div>
                    <input id='fName' onChange={this.handleChange}
                        type="text" placeholder="Name" />
                    <br />
                    <input id='fRole' onChange={this.randleChange}
                        type="text" placeholder="Role" />
                    <br />
                    <p>{famousName} is famous for {famousRole}</p>
                </div>
            );
        }
    }

    export default FamousPerson;