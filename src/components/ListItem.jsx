// Create a class for List Item component
import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li>{ this.props.ingredient }</li>
        );
    }
}

module.exports = ListItem;
