class First extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
      <form>
      <div>
      <label htmlFor="username">Enter username</label>
      <input id="username" name="username" type="text"/>
      </div>
      <div>
      <label htmlFor="username">Enter email</label>
      <input id="email" name="email" type="text"/>
      </div>
      <div>
      <label htmlFor="password">Enter password</label>
      <input id="password" name="password" type="text"/>
      </div>
      </form>

     <button>NEXT</button>

      </div>
    )
  }
}
window.First = First;
