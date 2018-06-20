// Create a class for List Item component
import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        console.log('The children of this are');
        console.log(this.props.children);

        return (
            <li>{ this.props.ingredient }</li>
        );
    }
}

module.exports = ListItem;
