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
    const name = target.name;

    const newState = this.state;
    newState.url[name] = value;
    this.setState(newState);
    this.props.onChange(newState.url);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ShortenForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
}

export default ShortenForm;