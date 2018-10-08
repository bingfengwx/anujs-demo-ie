import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vanson'
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>This is home.</h2>
                <input type='text' value={this.state.name} onChange={this.onChange} />
                <p>My name is {this.state.name}.</p>
            </div>
        );
    }
}

module.exports = Home;