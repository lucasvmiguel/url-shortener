import React from 'react';
import PropTypes from 'prop-types';

import {timeSinceString} from '../services/datetime.service.js';

class ShortenItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textLink: 'Click to copy this link', lastSeenDate: this.props.url.lastSeenDate, timeSinceStr: '-'};
    this.onClickLink = this.onClickLink.bind(this);
  }

  onClickLink(event) {
    event.preventDefault();
    setTimeout(function() { this.setState({textLink: 'Click to copy this link'}); }.bind(this), 300);
    this.setState({textLink: 'Copied'});
  };

  componentDidMount() {
    setInterval(() => {
      const lastSeenDateMinusOneSecond = Number(this.state.lastSeenDate) - 1000;
      const timeSinceStr = timeSinceString(this.props.timeStart, String(lastSeenDateMinusOneSecond));

      this.setState({lastSeenDate: lastSeenDateMinusOneSecond, timeSinceStr: timeSinceStr});
    }, 1000);
  }

  render() {
    return (
      <div className='flex-grid'>
        <div className='col-0-7'>
          <p className="url-content-links">
            <strong>
              <a className='url-domain-link' href={this.props.url.urlShorten} target="_blank" rel="noopener noreferrer">{this.props.appUrl}/</a>
              <a className='url-shorten-link' href={this.props.url.urlShorten} target="_blank" rel="noopener noreferrer">{this.props.url.shortcode}</a>
            </strong> 
            {this.props.url.newUrl && <label className='url-label-new'>new</label>}
            <a id='click-to-copy-link' className='click-to-copy-link' onClick={this.onClickLink} data-clipboard-text={this.props.url.urlShorten}>{this.state.textLink}</a>
          </p>
          <label className='url-extended-link'>{this.props.url.urlExtended}</label>
        </div>
        <div className='col-0-1 shorten-list-item-info align-center'>{this.props.url.redirectCount}</div>
        {this.props.url.redirectCount > 0 && <div className='col-0-3 shorten-list-item-info align-center'>{this.state.timeSinceStr}</div>}
        {this.props.url.redirectCount === 0 && <div className='col-0-3 shorten-list-item-info align-center'> - </div>}
      </div>
    );
  }
}

ShortenItem.propTypes = {
  url: PropTypes.object.isRequired,
  appUrl: PropTypes.string.isRequired,
  timeStart: PropTypes.instanceOf(Date).isRequired
}

export default ShortenItem;