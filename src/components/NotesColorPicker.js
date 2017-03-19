import React, { Component } from 'react';

class NotesColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            isActive: [1]
        }
    }

    handleColorSelect = (color, index) => {
        this.props.onColorSelect(color);

        let isActive = [];
        isActive[index] = !isActive[index];
        this.setState({ isActive });
    }

    render() {
        const { colors } = this.props;
        return (
            <div className="notes-color-picker">
                {
                    colors.map((color, index) => {
                        return (
                            <button
                                className={`notes-color-picker-btn ${this.state.isActive[index] ? 'is-active' : ''}`}
                                key={index}
                                onClick={this.handleColorSelect.bind(null, color, index)}
                                style={{ backgroundColor: color }}
                            ></button>
                        )
                    })
                }
            </div>
        );
    }
}

export default NotesColorPicker;
