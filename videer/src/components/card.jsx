import React, { Component } from 'react';
import Video from './video'; 

class Card extends Component {
  render() {
    return (
      <article className="card w-75 mb-1 mt-1">
        <div className="card-block p-2">
            <div className="media">
              <Video videoId="22439234" />
            </div>
        </div>
      </article>
    );
  }
}

export default Card;
