import React, { Component } from 'react';
import './styles/BSTGraphic.css';

export class BSTGraphic extends Component {
    componentDidUpdate(){
        switch(this.props.action){
            case 'insert':
                this.insert(this.props.payload);
                break;
            case 'delete':
                this.insert(this.props.payload);
                break;  
            default:
                break;
        }
    }
    insert = ( item ) => {
        let nodeDiv = document.createElement('div');
        let nodeSpan = document.createElement('div')
        nodeSpan.textContent = item;
        nodeSpan.classList = 'node-span';
        nodeDiv.appendChild(nodeSpan);
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
