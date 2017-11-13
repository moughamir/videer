import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import renderHTML from 'react-render-html';


class FeedItem extends Component {


    render() {
        let post = this.props.post;
        let embedStyle = {
            minHeight: '160px',
            maxWidth: '640px',
            height: '360px',
        };
        return (
            <div className="feed-single d-flex justify-content-center">
                <article className="card w-75 mb-1 mt-1">
                    <div className="card-block p-2">
                        <div className="media">
                            <a href="">
                                <img className="user-picture d-flex mr-1 rounded-circle" src={post.user.pictures === null ? '//via.placeholder.com/75x75?text=N/A' : post.user.pictures.sizes[1].link} alt={post.user.name} />
                            </a>
                            <div className="media-body">
                                <h5 className="mt-0 card-title">{post.user.name}</h5>
                                
                                <a href={post.link}>
                                <h6 className="card-subtitle text-muted">{post.name}</h6>
                                </a>
                                <div className="card-text">
                                    <TextTruncate
                                        line={2}
                                        truncateText="…"
                                        text={post.description}
                                    />
                                
                                </div>
                                <div className="embed-responsive" style={embedStyle}>
                                
                                {renderHTML(post.embed.html)}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="card-footer text-muted">
                        <ul className="nav  card-header-tabs nav-pills nav-fill">
                            <li className="nav-item">
                                <span className="nav-link text-muted">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;
                                {post.metadata.connections.likes.total}
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-muted">
                                    <i className="fa fa-comment-o" aria-hidden="true"></i>&nbsp;
                                    {post.metadata.connections.comments.total}
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-muted">
                                    <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;
                                    {post.stats.plays === null ? 'N/A' : post.stats.plays}
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
