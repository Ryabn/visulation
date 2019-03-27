import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import BSTVisualizer from './Visualizers/BinarySearchTree/BSTVisualizer';

class App extends Component {
    render() {
        return (
        <HashRouter>
            <Route path='/' component={BSTVisualizer} />
        </HashRouter>
        );
    }
}

export default App;
