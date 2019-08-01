import React, { Component } from 'react';

class InputText extends Component {

    render() {
        return (
            <div className="input-wrapper position-relative d-inline-block">
                <input
                    id={this.props.id}
                    type="text"
                    maxLength={this.props.maxLength}
                    placeholder={this.props.placeholder}
                    ref={el => this.input = el}
                    onChange={this.props.onValueChange}
                    required
                />
                <label
                    className="position-absolute label"
                    htmlFor={this.props.id}
                >{this.props.label}</label>
                <i className="material-icons position-absolute" onClick={this.props.onSearch}>{this.props.materialIcon}</i>
            </div>
        );
    }
}

export default InputText;