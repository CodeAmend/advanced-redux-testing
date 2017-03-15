import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <div className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button
          action="submit"
          onClick={}
        >Submit</button>
      </div>
    );
  }

}

export default connect(null, actions)(CommentBox);
