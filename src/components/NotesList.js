import React, { Component } from 'react';

import NotesItem from './NotesItem';

class NotesList extends Component {
    render() {
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <div className="notes-content">
                <div className="container">
                    <div className="notes-list">
                        {
                            notes.map((note) => {
                                const { id, text, color } = note;
                                return (
                                    <NotesItem
                                        key={id}
                                        id={id}
                                        onNoteDelete={onNoteDelete}
                                        color={color}
                                    >
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
