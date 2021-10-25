import React, { Component } from 'react';
import '../CSS/Toolbar.css'

//맨 상단바 
class Toolbar extends Component {
    render() {
        return (
            <div>
                <div className="tool_bar">
                    <span className="text_style">My</span>
                    <span className="text_style">{this.props.feed}</span>
                </div>
            </div>
        );
    }
}

export default Toolbar