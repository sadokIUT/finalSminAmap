import React from 'react';

class TotalPriceVeggie extends React.Component {
    render() {
    	return (
   		 <li className="total">
       		 <strong>Total:</strong>{this.props.format( this.props.total_price ) }
     		 </li>
    	)
    }
}

export default TotalPriceVeggie;

