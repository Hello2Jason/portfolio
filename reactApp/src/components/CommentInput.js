import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        username: PropTypes.any,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            content: ''
        }
    }

    componentDidMount() {
        this.input.focus();
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value,
        })
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value,
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({ username, content, createTime: +new Date() });
        }
        this.setState({ content: '' });
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>标题：</span>
                    <div className='comment-field-input'>
                        <input
                            ref={input => this.input = input}
                            value={this.state.username} onChange={this.handleUsernameChange.bind(this)}
                            />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>内容：</span>
                    <div className='comment-field-input'>
                        <textarea  value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        记录
                    </button>
                </div>
            </div>
        );
    }
}

export default CommentInput;
