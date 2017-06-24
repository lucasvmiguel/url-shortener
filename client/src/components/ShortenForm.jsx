import React from 'react';
import PropTypes from 'prop-types';

class ShortenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: this.props.url};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newState = this.state;
    newState.url = value;
    this.setState(newState);
    this.props.onChange(newState.url);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <form className='flex-grid flex-break padding-top-section' onSubmit={this.handleSubmit}>
        <input className="form-input-text col-0-9" type="text" name="url" value={this.state.url} onChange={this.handleChange} />
        <input className="form-input-submit col-0-3 col-sm" type="submit" value="Shorten this link" />
      </form>
    );
  }
}

ShortenForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string
}

export default ShortenForm;