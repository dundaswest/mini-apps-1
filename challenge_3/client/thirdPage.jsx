class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      number: 4,
      creditCard:'',
      expiryDate:'',
      CVV:'',
      billing:'',
    }
  }
  handlecreditCardChange(e){
    var value = e.target.value;
    this.setState({creditCard:value});
  }
  handleExpiryDateChange(e){
    var value = e.target.value;
    this.setState({expiryDate:value});
  }
  handleCVVChange(e){
    var value = e.target.value;
    this.setState({CVV:value});
  }
  handlebillingChange(e){
    var value = e.target.value;
    this.setState({billing:value});
  }
  render(){
    return (
      <div>
      <form>
      <div>
      <label htmlFor="creditCard">Enter creditCard</label>
      <input id="creditCard" name="creditCard" type="text"onChange={this.handlecreditCardChange.bind(this)}/>
      </div>
      <div>
      <label htmlFor="expiry date">Enter expiry date</label>
      <input id="expiry date" name="expiry date" type="text" onChange={this.handleExpiryDateChange.bind(this)}/>
      </div>
      <div>
      <label htmlFor="CVV">Enter CVV</label>
      <input id="CVV" name="CVV," type="text" onChange={this.handleCVVChange.bind(this)}/>
      </div>
      <div>
      <label htmlFor="billing zip code">Enter billing zip code</label>
      <input id="billing zip code" name="billing zip code" type="text"onChange={this.handlebillingChange.bind(this)}/>
      </div>
      </form>
    <button id = "submit" onClick = {()=> this.props.handleSubmitBtn([this.state.creditCard,this.state. expiryDate,this.state.CVV,this.state.billing].join(','))}>submit</button>
     <button onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>NEXT</button>

      </div>
    )
  }
}
window.third = Third;
