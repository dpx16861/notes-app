import React, { Component } from 'react';

import NotesItem from './NotesItem';

class NotesList extends Component {
    render() {
        const { notes } = this.props;
        return (
            <div className="notes-content">
                <div className="container">
                    <div className="notes-list">
                        {
                            notes.map((note) => {
                                const { id, text } = note;
                                return (
                                    <NotesItem key={id}>
                                        {text}
                                    </NotesItem>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default NotesList;
