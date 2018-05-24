
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    0: window.zero,
    1 : window.first,
    2 : window.second,
    3:  window.third,
    4 : window.confirmation,
    currentPage: window.zero,
    finalOutput : []
    }
  }

  confirm(info) {
    console.log(info);
    //TODO axios 
    $.ajax({
      method: "POST",
      url: "http://localhost:3000",
      contentType: "application/json",
      data: JSON.stringify({userInput:info})
      })
      .done(function( data ) {
        alert( "Data Saved: " + JSON.stringify(data));
      });
  }
  
  handleSubmitBtn(target){
    this.setState({finalOutput:this.state.finalOutput.concat([target])})
    console.log(this.state.finalOutput);
  }

 handleCheckOutBtn(number){
  this.setState({currentPage:this.state[number]});
 }
 render(){
   const TargetPage = this.state.currentPage;

   return (
     <div>
     <TargetPage  finalInfo = {this.state.finalOutput}confirm = {this.confirm.bind(this)} handleCheckOutBtn={this.handleCheckOutBtn.bind(this)}
     handleSubmitBtn={this.handleSubmitBtn.bind(this)}
     />
     
    </div>


   )
 }
}
//module.exports = this.state.finalOutput
//< TargetPage handleCheckOutBtn = {this.handleCheckOutBtn.bind(this)}/>
