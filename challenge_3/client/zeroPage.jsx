class Zero extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      number: 1
    }
  }
  render(){
    return (
      <div>
      <h1>Hello</h1>
      <button onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>CheckOut </button>
      </div>
    );
  }
}
window.zero = Zero;
//()=>this.props.handleCheckOutBtn(this.state.number)
