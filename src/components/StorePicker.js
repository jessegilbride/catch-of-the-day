import React from 'react';
import {getFunName} from '../helpers.js';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // stop form from submitting
    event.preventDefault();
    // get store name from input field
    const storeName = this.myInput.current.value;
    // change page to store submitted from form
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
