import React, { Component } from 'react';
import '../css/Toolbar.css'

//맨 상단바 
class Toolbar extends Component {
    render() {
        return (
            <div>
                <div className="tool_bar">
                    <a href="/" className="text_style">My</a>
                    <a href="/" className="text_style">{this.props.feed}</a>
                </div>
            </div>
        );
    }
}

export default Toolbar