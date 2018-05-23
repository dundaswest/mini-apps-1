
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      0: window.zero,
      1 : window.first,
      2 : window.second,
      3:  window.third,
      4 : window.confirmation,
      currentPage: window.zero
    }
  }
 handleCheckOutBtn(number){
  this.setState({currentPage:this.state[number]});
 }
 render(){
   const TargetPage = this.state.currentPage;

   return (
     <div>
     <TargetPage  handleCheckOutBtn={this.handleCheckOutBtn.bind(this)}/>
     
        </div>


   )
 }
}

//< TargetPage handleCheckOutBtn = {this.handleCheckOutBtn.bind(this)}/>
