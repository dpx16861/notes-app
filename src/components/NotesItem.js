import React, { Component } from 'react';

class NotesItem extends Component {
    render() {
        return (
            <div className="notes-item">
                {this.props.children}
            </div>
        );
    }
}

export default NotesItem;
