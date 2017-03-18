import React, { Component } from 'react';

import { NotesHeader } from './NotesHeader';

import './NotesApp.css';

class NotesEditor extends Component {
    render() {
        return (
            <div className="notes-editor">
                <textarea
                    className="notes-editor-textarea"
                    rows={10}
                    autoFocus
                />
                <div className="notes-editor-actions">
                    <button className="notes-editor-btn">Add</button>
                </div>
            </div>
        );
    }
}

class NotesGrid extends Component {
    render() {
        const {notes} = this.props;
        return (
            <div className="notes-grid">
                {
                    notes.map((note) => {
                        const {
                            id,
                            text
                        } = note;
                        return (
                            <Note key={id}>
                                {text}
                            </Note>
                        )
                    })
                }
            </div>
        );
    }
}

class Note extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="notes-item">
                {children}
            </div>
        );
    }
}

class NotesApp extends Component {
    constructor() {
        super();
        this.state = {
            notes: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda perferendis laboriosam eveniet, in iusto, deserunt aspernatur explicabo doloremque iste cupiditate inventore ipsam quis vel ex sed culpa incidunt facere! Mollitia?'
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit cum, voluptatibus asperiores voluptates. Maiores distinctio eius mollitia placeat earum voluptatem quisquam deleniti, excepturi, nemo aliquid vero natus soluta ducimus!'
                },
                {
                    id: 3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae reiciendis quidem, odit exercitationem, ut, dolor numquam assumenda mollitia commodi illum quisquam repellendus quos soluta veniam nemo dolores culpa amet libero!'
                },
                {
                    id: 4,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptas, quae itaque modi iusto illo, dolores voluptates possimus molestiae veniam, iste laudantium explicabo obcaecati debitis accusamus eos perspiciatis impedit consequuntur!'
                },
                {
                    id: 5,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus fugiat saepe necessitatibus rerum, sunt ea, obcaecati esse sit reprehenderit eveniet. Maiores accusantium quo repellat sunt, sit quia, voluptatem non error?'
                }
            ]
        }
    }

    render() {
        const {notes} = this.state;
        return (
            <div className="notes">
                <div className="container">
                    <NotesHeader />
                    <NotesEditor />
                    <NotesGrid notes={notes} />
                </div>
            </div>
        );
    }
}

export default NotesApp;
