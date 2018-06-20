import React, { Component } from 'react';
import ListItem from './ListItem.jsx';

let fakeData = [{
    id: "1",
    ingredient: "ham"
}, {
    id: "2",
    ingredient: "cheese"
}, {
    id: "3",
    ingredient: "potatoes"
}];

class List extends Component {
    render() {
        // This is a cool example of passing children into a component that can be
        // accessed with this.props.children
        //
        return (
            <ul>
                {/* {
                    fakeData.map((piece) => {
                        return <ListItem key={ piece.id } ingredient={ piece.ingredient } />
                    })
                } */}
                {
                    fakeData.map((piece) =>
                        <ListItem key={ piece.id } ingredient={ piece.ingredient }>
                            <p>Some paragraph text</p>
                        </ListItem>)
                }
            </ul>
        )
    }
}

module.exports = List;
