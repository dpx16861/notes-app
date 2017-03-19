import React, { Component } from 'react';
import { NotesHeader } from './NotesHeader';
import './NotesApp.css';

const ENTER_KEY = 13;

class NotesGrid extends Component {
    render() {
        const { notes } = this.props;
        return (
            <div className="notes-content">
                <div className="container">
                    <div className="notes-grid">
                        {
                            notes.map((note) => {
                                const { id, text } = note;
                                return (
                                    <Note key={id}>
                                        {text}
                                    </Note>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

class Note extends Component {
    render() {
        return (
            <div className="notes-item">
                {this.props.children}
            </div>
        );
    }
}

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

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if (savedNotes) {
            this.setState({ notes: savedNotes });
        }
    }

    componentDidUpdate() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

    handleNoteAdd = (newNote) => {
        this.setState({
            notes: [newNote, ...this.state.notes]
        });
    }

    render() {
        return (
            <div className="notes">
                <NotesHeader />
                <NotesEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} />
            </div>
        );
    }
}

export default NotesApp;
