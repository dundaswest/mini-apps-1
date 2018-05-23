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
      <button  onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>Purchase</button>
      </div>
    );
  }
}
window.confirmation = Confirmation;
