import React from 'react';
import AddVeggieInOrder from './AddVeggieInOrder';
import TotalPriceVeggie from './TotalPriceVeggie';
class Order extends React.Component {

  render() {
	return (
   	 <div className="order-wrap">
   		 <h2>Votre commande</h2>
        	<ul className="order">
            	{
              	Object
                	.keys(this.props.state.order)
                	.map(key =><AddVeggieInOrder delete_in_order={this.props.delete_in_order} format={this.props.formatPrice}  compteur={this.props.get_nbr_veggie_in_order(key)} index={key} key={key} veggie={this.props.state.order[key]}/>)         	 
            	}
            	<span className="article_total">Nombre d'article total : {this.props.state.total_article}</span>
            	<TotalPriceVeggie format = {this.props.formatPrice} total_price={this.props.state.total_price}/>                           	 
        	</ul>
   	 </div>
    )
    
  }
}

export default Order;
