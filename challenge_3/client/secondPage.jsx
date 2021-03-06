class Second extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      number: 3,
      line1:'',
      line2:'',
      city:'',
      state:'',
      zip:'',
      phoneNumber:''
    }
  }

  handleLine1Change(e){
    var value = e.target.value;
    this.setState({line1:value});
  }
  handleLine2Change(e){
    var value = e.target.value;
    this.setState({line2:value});
  }
  handleCityChange(e){
    var value = e.target.value;
    this.setState({city:value});
  }
  handleStateChange(e){
    var value = e.target.value;
    this.setState({state:value});
  }
  handleZipChange(e){
    var value = e.target.value;
    this.setState({zip:value});
  }
  handlePhoneNumberChange(e){
    var value = e.target.value;
    this.setState({phoneNumber:value});
  }

  render() {
    return (
      <div>
      <form>
      <div>
      <label htmlFor="line1">line1</label>
      <input id="line1" name="line1" type="text" onChange={this.handleLine1Change.bind(this)}/>
      </div>
      <div>
      <label htmlFor="line2">line2</label>
      <input id="line2" name="line2" type="text"  onChange={this.handleLine2Change.bind(this)}/>
      </div>
      <div>
      <label htmlFor="city">Enter city</label>
      <input id="city" name="city" type="text" onChange={this.handleCityChange.bind(this)}/>
      </div>
      <div>
        <lable htmlFor="state">Enter state</lable>
        <input id="state" name="state" type="text"onChange={this.handleStateChange.bind(this)}/>
      </div>
      <div>
        <lable htmlFor="zip">Enter zip</lable>
        <input id="zip" name="zip" type="text"onChange={this.handleZipChange.bind(this)}/>
      </div>
      <div>
        <lable htmlFor="phoneNumber">phoneNumber</lable>
        <input id="phoneNumber" name="phoneNumber" type="text"onChange={this.handlePhoneNumberChange.bind(this)}/>
      </div>
      </form>
      <button id = "submit"
      onClick = {()=> this.props.handleSubmitBtn([this.state.line1,this.state.line2,this.state.city,this.state.state,this.state.zip,this.state.phoneNumber].join(','))} >submit</button>
     <button onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>NEXT</button>

      </div>
    )
  }
   

}

window.second =  Second;
