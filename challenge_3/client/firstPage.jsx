class First extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      number: 2,
      name:'',
      email:'',
      password:'',
    }
  }
  handleUserChange(e){
    var value = e.target.value;
    this.setState({name:value});
  }
  handleEmailChange(e){
    var value = e.target.value;
    this.setState({email:value});
  }
  handlePasswordChange(e){
    var value = e.target.value;
    this.setState({password:value});
  }
  
  render(){
    return (
      <div>
      <form>
      <div>
      <label htmlFor="username">Enter username</label>
      <input id="username" name="username" type="text" onChange={this.handleUserChange.bind(this)}/>
      </div>
      <div>
      <label htmlFor="email">Enter email</label>
      <input id="email" name="email" type="text" onChange={this.handleEmailChange.bind(this)}/>
      </div>
      <div>
      <label htmlFor="password">Enter password</label>
      <input id="password" name="password" type="text" onChange={this.handlePasswordChange.bind(this)}/>
      </div>
      </form>
    <button id = "submit" onClick = {()=> this.props.handleSubmitBtn([this.state.name,this.state.email,this.state.password].join(','))}>submit</button>
     <button id="toSecond" onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>NEXT</button>

      </div>
    )
  }
}
window.first = First;
