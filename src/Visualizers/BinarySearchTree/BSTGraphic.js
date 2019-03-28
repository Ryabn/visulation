import React, { Component } from 'react';
import './styles/BSTGraphic.css';


function coordinateToPosition(width, x, y){
    let position = {
        x: x * width / (Math.pow(2, y -1 ) + 1),
        y: 100 * y
    }
    return position;
}

function nodeLink(x1, y1, x2, y2){
    console.log(x1, y1, x2, y2);
    x1+=20;
    y1+=20;
    x2+=20;
    y2+=20;
    return `<svg width="1000" height="1000"><line class="node-link" dominant-baseline="hanging" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/></svg>`;
}

export class BSTGraphic extends Component {
    componentDidMount(){
        this.graphicWidth = parseInt(window.getComputedStyle(document.getElementById('graphic')).getPropertyValue('width'));
    }
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
        let coordinates = this.props.bst.find(item, 'coordinate');
        if (coordinates == null){
            return;
        }
        let path = this.props.bst.find(item, 'path');
        let nodeDiv = document.createElement('div');
        nodeDiv.addEventListener("click", () => {
            fetch('https://api.imgflip.com/get_memes').then(resp => {
                return resp.json();
            }).then(resp => {
                let memeURL = resp.data.memes[parseInt(Math.random()*100)].url;
                let memeImage = document.createElement('img');
                memeImage.src = memeURL;
                memeImage.style.zIndex = 10000;
                memeImage.style.position = 'fixed';
                memeImage.style.top = '20px';
                memeImage.style.height = '69vh';
                console.log(memeImage);
                document.getElementById('root').appendChild(memeImage);
            });
        });
        let nodeSpan = document.createElement('div')
        nodeSpan.textContent = item;
        nodeSpan.classList = 'node-span';
        nodeDiv.appendChild(nodeSpan);
        nodeDiv.classList = 'node';
        let position = coordinateToPosition(this.graphicWidth, coordinates['x'], coordinates['y']);
        nodeDiv.style.cssText = `top: ${position.y}px;left: ${position.x}px`;
        if(path.length > 1){
            let position2 = coordinateToPosition(this.graphicWidth, path[path.length - 2]['x'], path[path.length - 2]['y']);
            document.getElementById('graphic').insertAdjacentHTML('beforeend', nodeLink(
                position2['x'],
                position2['y'],
                position['x'],
                position['y']
            ));
        }
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
