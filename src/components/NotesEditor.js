import React, { Component } from 'react';

const ENTER_KEY = 13;

class NotesEditor extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleNoteAdd = () => {
        const val = this.state.text.trim();

        const newNote = {
            text: val,
            id: Date.now()
        };

        if (val) {
            this.props.onNoteAdd(newNote);
            this.resetState();
        } else {
            this.resetState();
        }
    }

    handleKeyDown = (e) => {
        if (e.which === ENTER_KEY) {
            e.preventDefault();
            this.handleNoteAdd();
        }
    }

    resetState() {
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <div className="notes-editor">
                <div className="container">
                    <textarea
                        className="notes-editor-textarea"
                        rows={8}
                        placeholder="New note..."
                        autoFocus
                        value={this.state.text}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleTextChange}
                    />

                    <div className="notes-editor-actions">
                        <button className="notes-editor-btn" onClick={this.handleNoteAdd}>
                            Add note
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotesEditor;
