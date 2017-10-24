import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import renderHTML from 'react-render-html';


class FeedItem extends Component {


    render() {
        let embedStyle = {
            minHeight: '160px',
  maxWidth: '640px',
  height: '360px',
        }
        return (
            <div className="feed-single d-flex justify-content-center">
                <article className="card w-75 mb-1 mt-1">
                    <div className="card-block p-2">
                        <div className="media">
                            <a href="">
                                <img className="user-picture d-flex mr-1 rounded-circle" src="userPicture[index].sizes[1].link" alt="post.user.name" />
                            </a>
                            <div className="media-body">
                                <h5 className="mt-0 card-title">{this.props.post.user.name}</h5>
                                
                                <a href={this.props.post.link}>
                                <h6 className="card-subtitle text-muted">{this.props.post.name}</h6>
                                </a>
                                <div className="card-text">
                                    <TextTruncate
                                        line={2}
                                        truncateText="…"
                                        text={this.props.post.description}
                                    />
                                
                                </div>
                                <div className="embed-responsive" style={embedStyle}>
                                
                                {renderHTML(this.props.post.embed.html)}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="card-footer text-muted">
                        <ul className="nav  card-header-tabs nav-pills nav-fill">
                            <li className="nav-item">
                                <span className="nav-link text-muted">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;
                                {this.props.post.metadata.connections.likes.total}
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-muted">
                                    <i className="fa fa-comment-o" aria-hidden="true"></i>&nbsp;
                                    {this.props.post.metadata.connections.comments.total}
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-muted">
                                    <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;
                                    {this.props.post.stats.plays === null ? 'N/A' : null}
                                </span>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
        );
    }
}


export default FeedItem;

// <b>{this.props.post.name}</b> {this.props.post.user.name}