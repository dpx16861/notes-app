import React, { Component } from 'react';

class NotesColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            isSelected: 0
        };
    }

    handleColorChange = (color, index) => {
        this.props.onColorChange(color);

        this.setState({
            isSelected: index
        });
    }

    render() {
        const { colors } = this.props;
        return (
            <div className="notes-color-picker">
                {
                    colors.map((color, index) => {
                        const activeClass = (this.state.isSelected === index ? 'is-active' : '');
                        return (
                            <button
                                className={`notes-color-picker-btn ${activeClass}`}
                                key={index}
                                onClick={this.handleColorChange.bind(null, color, index)}
                                style={{ backgroundColor: color }}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default NotesColorPicker;
