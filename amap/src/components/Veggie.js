import React from 'react';

class Veggie extends React.Component {

  constructor(props){
  super(props);
  this.veggie_available = this.veggie_available.bind(this);
    
  }

  veggie_available( )
  {
  //console.log(this.props.details)
  if( this.props.details.status == "available")
  {
    return <button onClick={(e)=> this.props.add_in_order( this.props.index, this.props.details ) } >"Ajouter au panier"</button>;
  }
  else
  {
    return <button disabled='true'>"Plus en stock !"</button>;
  }
  }

  render() {
      const {details} = this.props;
      return (
    <li className="menu-veggie">
      <img src={details.image} alt={details.name}/>
      <h3 className="veggie-name" ref={(input) => this.name = input} >
        {details.name}
        <span className="price" ref={(input) => this.price = input}>{details.price}</span>
      </h3>
      <p>{details.desc}</p>

      {this.veggie_available()}
     
    </li>
  )
  }
}

export default Veggie;
