import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SignatureForm.styles';

class SignatureForm extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      
    };
  }

 

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SignatureFormWrapper">
        <form className="main-signature-form">
          <label>Nombre <input name="signatureName" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Empresa <input name="signatureCompany" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Cargo <input name="signaturePosition" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Departamento <input name="signatureDepartament" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Teléfono <input name="signaturePhone" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Celular <input name="signatureMobile" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Website <input name="signatureWebsite" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Email <input name="signatureEmail" type="text" placeholder="" onChange={this.props.handleInput}/></label>
          <label>Dirección <input name="signatureAddress" type="text" placeholder="" onChange={this.props.handleInput}/></label>
        </form>
      </div>
    );
  }
}

SignatureForm.propTypes = {
  // bla: PropTypes.string,
};

SignatureForm.defaultProps = {
  // bla: 'test',
};

export default SignatureForm;
