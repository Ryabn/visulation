import React, { Component } from 'react';
import './styles/BSTControls.css';
import {Card, CardHeader, TextField, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export class BSTControls extends Component {
    componentDidMount(){
        this.props.insert(23);
    }
    insert = () => {
        this.props.insert(parseInt(document.getElementById('user-insert').value));
    }
    delete = () => {
        console.log("Delete Prompted!");
    }
    render() {
        return (
            <Card >
                <CardHeader title="Controls" className="control-header"/>
                <hr className="no-margin"/>
                <div className="bst-controls">
                    <TextField
                        id="user-insert"
                        label="Insert"
                        name="number"
                        variant="outlined"
                    />
                    <IconButton variant="outlined" onClick={this.insert}>
                        <AddIcon/>
                    </IconButton>
                    <TextField
                        id="user-insert"
                        label="Delete"
                        name="number"
                        variant="outlined"
                    />
                    <IconButton variant="outlined" onClick={this.delete}>
                        <AddIcon/>
                    </IconButton>
                </div>
            </Card>
        )
    }
}

export default BSTControls;
