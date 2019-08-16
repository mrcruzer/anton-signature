import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SignaturePreview.styles';

class SignaturePreview extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      
    };
  }

 
  render () {

    
    const signatureData = this.props.getSignatureData;
    let color = signatureData.textColor;

    const nameStyle = {
      
      fontSize: '16px',
      fontWeight: 'bold',
      color: color
    }
    const smallTextBold = {
      fontWeight: 'bold',
      color: color
    }
    const fontStyle = {
      fontSize: '12px',
      color: signatureData.textActive
    }

    const tableLeftBorder = {
      borderLeft: `1px solid ${color}`,
      paddingLeft: '10px'
    }
  

    
    
    // console.log(this.props.getSignatureData)

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SignaturePreviewWrapper">
        <div className="email-mockup">
          <div> Nuevo Correo Electronico</div>
          <div>Para: Anton Agency</div>
          <div>Asunto: ¡Probando mi firma de correos!</div>
          <div>
            <p>Saludos para todo el TeamAnton,</p>
            <p>Check out this awesome email signature created with MySignature</p>
            <p>Regards,</p>
          </div>
          <div></div>
        </div>

        <table  data-mysignature-date="2019-04-26T17:11:33.208Z" data-mysignature-is-paid="0" cellSpacing="0" width="470" cellPadding="0" border="0">
          <tbody style={fontStyle}>
                <tr>
                <td valign="top" width="100">
                  <img alt="Anton Agency" width="100"  src="https://anton.agency/wp-content/uploads/2018/09/Anton-Advertising-Agency-Icon.png" />
                </td>
                <td style={tableLeftBorder}>
                <table  cellSpacing="0" cellPadding="0" border="0">
                  <tbody>
                      <tr>
                        <td> <span style={nameStyle}>{signatureData.signatureName}</span></td>
                      </tr>
                      <tr>
                        <td><div><span>{signatureData.signaturePosition}</span> | {signatureData.signatureDepartament} | {signatureData.signatureCompany}</div> </td>
                      </tr>
                      <tr>
                        <td> <div> <span style={smallTextBold}>Cel:&nbsp;</span> <a href={"tel:"+signatureData.signatureMobile}>{signatureData.signatureMobile}</a> </div> </td> </tr>
                      <tr>
                        <td> <div> <span style={smallTextBold}>Tel:&nbsp;</span> <a href={"tel:"+signatureData.signaturePhone}>{signatureData.signaturePhone}</a> </div> </td> </tr>
                      <tr>
                          <td> <div> <span style={smallTextBold}>Email:&nbsp;</span> <a href={"mailto:"+signatureData.signatureEmail} target="_blank">{signatureData.signatureEmail}</a> </div> </td> </tr>
                      <tr>
                        <td><div> <span style={smallTextBold}>A:&nbsp;</span>{signatureData.signatureAddress}</div> </td> </tr>    <tr> <td> <div> <a href={signatureData.signatureWebsite} target="_blank">{signatureData.signatureWebsite}</a> </div> </td>
                      </tr>
                      <tr>
                        <td>
                          <table cellSpacing="0" cellPadding="0" border="0">
                            <tbody>
                              <tr>
                                <td>
                                  <a href="https://www.facebook.com/antonagencyrd/"><img alt="" width="28" src="https://img.mysignature.io/s/v3/8/2/1/8214630f-5a32-5c61-9153-719fc8b2218c.png"/></a>
                                </td>
                                <td>
                                  <a href="https://twitter.com/antonagencyrd/"><img alt="" width="28" src="https://img.mysignature.io/s/v3/8/c/4/8c40f2db-8642-5df9-9d3d-4e6e6767458c.png"/></a>
                                </td>
                                <td>
                                  <a href="https://www.instagram.com/antonagencyrd"><img alt="" width="28" src="https://img.mysignature.io/s/v3/1/c/9/1c94b69b-7b12-50ab-9eb5-bbd698022ffe.png"/></a>
                                </td> 
                              </tr> 
                            </tbody>
                          </table> 
                        </td>
                      </tr>
                  </tbody>
                </table>
              </td>
              </tr>
          </tbody>
        </table>
    </div>
    );
  }
}

SignaturePreview.propTypes = {
  // bla: PropTypes.string,
};

SignaturePreview.defaultProps = {
  // bla: 'test',
};

export default SignaturePreview;
