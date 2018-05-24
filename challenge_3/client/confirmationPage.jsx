class Confirmation extends React.Component {
  constructor(props){
    super(props);
    super(props);
    this.state= {
      number: 0
    }
  }
  render(){
    return (
      <div>
      <div>Confirmation</div>
      <div id ="confirm"></div>
      <div>{this.props.finalInfo}</div>
      <button  onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>GoBack</button>
      <button onClick = {()=> this.props.confirm(this.props.finalInfo)}>CHECKOUT</button>
      </div>
    );
  }
}
window.confirmation = Confirmation;
