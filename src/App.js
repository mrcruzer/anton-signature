
import React, { Component } from 'react';
import './App.scss';
import SignatureForm from './components/SignatureForm/SignatureForm';
import SignaturePreview from './components/SignaturePreview/SignaturePreview';
import SocialNetworks from './components/SocialNetworks'
import { TwitterPicker } from 'react-color';

class App extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      signatureName: "Leidy Lantigua",
      signatureCompany: "Anton Agency",
      signaturePosition: "Gerente",
      signatureDepartament: "Dept. Administración",
      signaturePhone: "1.829.547.3193",
      signatureMobile: "809.555.5555",
      signatureWebsite: "anton.agency",
      signatureEmail: "ejemplo@anton.agency",
      signatureAddress: "C/ Puerto Rico 310, Alma Rosa 1, Santo Domingo Este 11504",
      textActive: '#b2b3b2',
      textColor: '#b2b3b2',
      rrss: [],
      inputValue : '',
      //show: false
      show: false
      
    }
    this.addRrss = this.addRrss.bind(this)
 
    
  }

  colors = ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8', '#0065a1']

  handleChange = (color) => {
    this.setState({
       textColor: color.hex 
      });
  }

 

  addRrss = (e) => {
    const title = e.currentTarget.value;  



     if(this.state.rrss.includes(title)){
      //console.log(title);
       return;
     }
    this.setState(prevState =>{
      return {
        rrss: [...prevState.rrss, title],
        //show: true
        
        
      }

      
    })
  }



  // socialRRSS = (e) => {
  //   const {name, value} = e.target;

  //   alert(name);

    

    
  // } 
  

  handleInput = (e) => {
    const {name, value} = e.target

    //alert(value);

    this.setState({
      
      [name]: value,
      textActive: '#333',

     

    })

    //console.log(this.state);

  }

  render(){
   

   

    

    return (
      <main className="main-signature">
        <div className="main-information">
         <TwitterPicker width="100" color={this.state.textColor} triangle="hide" colors={this.colors} onChange={ this.handleChange }/>
         <SocialNetworks mainRRSS={this.state.rrss} handleInput={this.handleInput} addRrss={this.addRrss}/>
         {/* <SocialNetworks mainRRSS={this.state.rrss} addRrss={this.addRrss}/> */}
        </div>
        <div className="main-render-preview">
          <SignaturePreview getSignatureData={this.state}/>
        </div>
        <aside className="main-aside">
          <SignatureForm handleInput={this.handleInput} />
        </aside>
      </main>
    );
  }
}

export default App;
