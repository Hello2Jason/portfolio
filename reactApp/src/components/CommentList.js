import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    static propTypes = {
        comments: PropTypes.array
    }

    handleDelete(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return (
            <div>{this.props.comments.map((comment, i) => <Comment onDelete={this.handleDelete.bind(this)} comment={comment} key={i} index={i} />)}</div>
        );
    }
}

export default CommentList;
