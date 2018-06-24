import React from 'react';
import { string, bool } from 'prop-types';

class Toggleable extends React.Component {
  constructor(props) {
    super(props);
    const displayContent = props.display || false;
    this.state = { displayContent };
  }

  createControls() {
    const { displayContent } = this.state;
    return (
      <button onClick={() => this.toggle()}>
        {displayContent ? this.props.hideLabel : this.props.showLabel}
      </button>
    );
  }

  toggle = () => this.setState({ displayContent: !this.state.displayContent });
  hide = () => this.setState({ displayContent: false });
  show = () => this.setState({ displayContent: true });

  render() {
    const { displayContent } = this.state;
    const { children, controls } = this.props;
    return (
      <div>
        {displayContent ? children : null}
        {controls ? this.createControls() : null}
      </div>
    );
  }
}

Toggleable.propTypes = {
  showLabel: string,
  hideLabel: string,
  controls: bool
};

Toggleable.defaultProps = {
  showLabel: 'Show',
  hideLabel: 'Hide',
  controls: false
};

export default Toggleable;
