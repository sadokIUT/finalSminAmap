import React from 'react';
import AddVeggieForm from './AddVeggieForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <p>Inventory</p>
        <AddVeggieForm addVeggie={this.props.addVeggie}/>
      </div>
    )
  }
}

export default Inventory;
