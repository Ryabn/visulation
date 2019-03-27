import React, { Component } from 'react';
import './styles/BSTGraphic.css';

export class BSTGraphic extends Component {
    componentDidUpdate(props){
        switch(props.action){
            case 'insert':
                this.insert(props.payload);
                break;
            default:
                break;
        }
    }
    insert = ( item ) => {
        let nodeDiv = document.createElement('div');
        nodeDiv.textContent = item;
        nodeDiv.classList = 'node';
        document.getElementById('graphic').appendChild( nodeDiv );
    }
    render() {
            return (
            <div id="graphic">
                
            </div>
            )
        }
}

export default BSTGraphic;
