import React, { Component } from 'react';
import { BinarySearchTree } from './BST.js';
import { BSTGraphic } from './BSTGraphic';
import BSTControls from './BSTControls.js';
import './styles/BSTVisualizer.css';

export class BSTVisualizer extends Component {
    constructor(props){
        super(props);
        this.bst = new BinarySearchTree();
        this.state = {
            action: "",
            payload: 0
        }
    }
    insert = (item) => {
        this.bst.insert(item);
        this.setState({
            action: 'insert',
            payload: item
        });
    }
    render() {
        return (
        <div className="visualizer">
            <BSTGraphic bst={this.bst} action={this.state.action} payload={this.state.payload}/>
            <BSTControls insert={this.insert} />
        </div>
        )
    }
}

export default BSTVisualizer
