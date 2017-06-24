import React from 'react';
import PropTypes from 'prop-types';

import {timeSinceString} from '../services/datetime.service.js';

class ShortenItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textLink: 'Click to copy this link'};
    this.onClickLink = this.onClickLink.bind(this);
  }

  onClickLink(event) {
    event.preventDefault();
    setTimeout(function() { this.setState({textLink: 'Click to copy this link'}); }.bind(this), 300);
    this.setState({textLink: 'Copied'});
  };

  render() {
    return (
      <div className='flex-grid'>
        <div className='col-0-8'>
          <p className="url-content-links">
            <strong>
              <a className='url-domain-link' href={this.props.url.urlShorten} target="_blank" rel="noopener noreferrer">{this.props.appUrl}/</a>
              <a className='url-shorten-link' href={this.props.url.urlShorten} target="_blank" rel="noopener noreferrer">{this.props.url.shortcode}</a>
            </strong> 
            <a id='click-to-copy-link' className='click-to-copy-link' onClick={this.onClickLink} href='#' data-clipboard-text={this.props.url.urlShorten}>{this.state.textLink}</a>
          </p>
          <label className='url-extended-link'>{this.props.url.urlExtended}</label>
        </div>
        <div className='col-0-1 shorten-list-item-info align-center'>{this.props.url.redirectCount}</div>
        <div className='col-0-2 shorten-list-item-info align-center'>{timeSinceString(this.props.url.lastSeenDate)}</div>
      </div>
    );
  }
}

ShortenItem.propTypes = {
  url: PropTypes.object.isRequired,
  appUrl: PropTypes.string.isRequired
}

export default ShortenItem;