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
        return (
            <ul>
                {/* {
                    fakeData.map((piece) => {
                        return <ListItem key={ piece.id } ingredient={ piece.ingredient } />
                    })
                } */}
                {
                    fakeData.map((piece) => <ListItem key={ piece.id } ingredient={ piece.ingredient } />)
                }
            </ul>
        )
    }
}

module.exports = List;
