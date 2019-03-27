import React, { Component } from 'react';

export class BSTControls extends Component {
    insert = () => {
        this.props.insert(parseInt(document.getElementById('user-insert').value));
    }

    render() {
        return (
            <div>
                <input id="user-insert" />
                <button onClick={this.insert}> insert </button>
            </div>
        )
    }
}

export default BSTControls;
