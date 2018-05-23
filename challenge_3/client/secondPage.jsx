class Second extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <form>
      <div>
      <label htmlFor="line1">line1</label>
      <input id="line1" name="line1" type="text"/>
      </div>
      <div>
      <label htmlFor="line2">line2</label>
      <input id="line2" name="line2" type="text"/>
      </div>
      <div>
      <label htmlFor="city">Enter city</label>
      <input id="city" name="city" type="text"/>
      </div>
      <div>
        <lable htmlFor="state">Enter state</lable>
        <input id="state" name="state" type="text"/>
      </div>
      <div>
        <lable htmlFor="zip">Enter zip</lable>
        <input id="zip" name="zip" type="text"/>
      </div>
      <div>
        <lable htmlFor="phoneNumber">phoneNumber</lable>
        <input id="phoneNumber" name="phoneNumber" type="text"/>
      </div>
      </form>

     <button>NEXT</button>

      </div>
    )
  }
   

}
