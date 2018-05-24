class First extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      number: 2,
      username:'',
      email:'',
      password:''
    }
  }
  handleUserChange(e){
    this.setState({username:e.target.value})
    console.log(e.target.value)
  }
  handleEmailChange(e){
    this.setState({email:e.target.value})
    console.log(e.target.value)
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
    console.log(e.target.value)
  }
  submit() {
    //axios 
    $.ajax({
      method: "POST",
      url: "http://localhost:3000",
      contentType: "application/json",
      data: JSON.stringify({userInput:[this.state.username,this.state.email,this.state.password]})
      })
      .done(function( data ) {
        alert( "Data Saved: " + JSON.stringify(data));
      });
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
    <button id = "submit" onClick = {()=> this.submit()}>submit</button>
     <button id="toSecond" onClick = {()=>this.props.handleCheckOutBtn(this.state.number)}>NEXT</button>

      </div>
    )
  }
}
window.first = First;
