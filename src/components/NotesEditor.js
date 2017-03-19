import React, { Component } from 'react';

import NotesColorPicker from './NotesColorPicker';

import { ENTER_KEY, DEFAULT_COLOR, COLORS } from '../utils/constants';

class NotesEditor extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            color: DEFAULT_COLOR
        };
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleColorChange = (color) => {
        this.setState({ color });
    }

    handleNoteAdd = () => {
        const val = this.state.text.trim();

        const newNote = {
            text: val,
            id: Date.now(),
            color: this.state.color
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
                        <NotesColorPicker onColorChange={this.handleColorChange} colors={COLORS} />
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
