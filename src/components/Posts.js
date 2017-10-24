import React, { Component } from 'react';
import FeedItem from './FeedItem';

class Posts extends Component {

    render() {

        let feedItems;
        if (this.props.posts) {
            
            feedItems = this.props.posts.map(post => {
                //console.log(post);
                return (
                    <FeedItem key={post.uri} post={post} />
                    );
            });
        }

        return (
            <div className="feed-items row d-flex justify-content-center flex-column">
            {feedItems}
            </div>
        );
    }
}

export default Posts;
