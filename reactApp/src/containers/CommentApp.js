import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import CommentHeader from '../components/CommentHeader'

export default class CommentApp extends Component {
    render() {
        return (
            <div className="wrapper">
                <CommentHeader />
                <CommentInput />
                <CommentList />
            </div>
        );
    }
}
