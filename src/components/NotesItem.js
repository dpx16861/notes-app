import React, { Component } from 'react';

class NotesItem extends Component {
    handleNoteDelete = () => {
        this.props.onNoteDelete(this.props.id);
    }

    render() {
        return (
            <div className="notes-item">
                <button className="notes-item-delete" onClick={this.handleNoteDelete}>
                    <span>×</span>
                </button>
                {this.props.children}
            </div>
        );
    }
}

export default NotesItem;
