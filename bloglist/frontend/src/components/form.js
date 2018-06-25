import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getEmptyFormData();
  }

  getEmptyFormData() {
    const { fields } = this.props;
    const formData = fields.reduce((obj, field) => {
      const { name: key } = field;
      obj[key] = '';
      return obj;
    }, {});
    return formData;
  }

  getFormData() {
    const { fields } = this.props;
    const formData = fields.reduce((obj, field) => {
      const { name: key } = field;
      obj[key] = this.state[key];
      return obj;
    }, {});
    return formData;
  }

  onFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const formData = this.getFormData();
    this.props.onSubmit(formData);
    this.setState(this.getEmptyFormData());
  };

  render() {
    const { fields, buttonLabel } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        {fields.map(field => {
          const { type, name } = field;
          return (
            <div key={name}>
              {name}
              <input
                name={name}
                type={type || 'text'}
                value={this.state[name]}
                onChange={this.onFieldChange}
              />
            </div>
          );
        })}
        <button type="submit">{buttonLabel}</button>
      </form>
    );
  }
}

Form.propTypes = {
  fields: arrayOf(
    shape({
      type: string,
      name: string
    })
  ),
  buttonLabel: string,
  onSubmit: func
};

export default Form;
