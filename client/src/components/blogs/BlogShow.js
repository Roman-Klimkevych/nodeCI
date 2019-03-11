import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog, deleteBlog } from '../../actions';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }

  deleteBlog = () => {
    this.props.deleteBlog(this.props.match.params._id, this.props.history);
  }

  render() {
    if (!this.props.blog) {
      return '';
    }

    console.log(this.props)

    const { title, content } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>

        <div className="fixed-action-btn" onClick={this.deleteBlog}>
          <div className="btn-floating btn-large red">
            <i className="material-icons">delete</i>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog, deleteBlog })(BlogShow);
