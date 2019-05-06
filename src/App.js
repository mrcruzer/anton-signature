
import React, { PureComponent } from 'react';
import './App.scss';
import SignatureForm from './components/SignatureForm/SignatureForm';
import SignaturePreview from './components/SignaturePreview/SignaturePreview';

class App extends PureComponent  {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      signatureName: "",
      signatureCompany: "Anton Agency",
      signaturePosition: "",
      signatureDepartament: "",
      signaturePhone: "",
      signatureMobile: "",
      signatureWebsite: "",
      signatureEmail: "",
      signatureAddress: ""
      
    }
 
    
  }

  

  
  handleInput = (e) => {
    const {name, value} = e.target
    this.setState({
      
      [name]: value

    })

  }

  render(){
    //console.log(this.state)
    return (
      <main className="main-signature">
        <div></div>
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
