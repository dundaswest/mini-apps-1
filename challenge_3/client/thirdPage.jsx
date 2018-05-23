class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      number: 4
    }
  }
  render(){
    return (
      <div>
      <form>
      <div>
      <label htmlFor="creditCard">Enter creditCard</label>
      <input id="creditCard" name="creditCard" type="text"/>
      </div>
      <div>
      <label htmlFor="expiry date">Enter expiry date</label>
      <input id="expiry date" name="expiry date" type="text"/>
      </div>
      <div>
      <label htmlFor="CVV">Enter CVV</label>
      <input id="CVV" name="CVV," type="text"/>
      </div>
      <div>
      <label htmlFor="billing zip code">Enter billing zip code</label>
      <input id="billing zip code" name="billing zip code" type="text"/>
      </div>
      </form>
    <button id = "submit">submit</button>
     <button onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>NEXT</button>

      </div>
    )
  }
}
window.third = Third;
