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
    let social = signatureData.rrss;
    


    // const classFacebook = {
    //   displayNone: 
    // }

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

    const paddingStyle = {
      paddingRight: '2px',
      paddingTop: '4px'
    }

    const tableLeftBorder = {
      borderLeft: `1px solid ${color}`,
      paddingLeft: '10px'
    }

  

    // const socialData = {
    //   social: social
    // }
  

    
    
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
                              {(() => {
                              switch(this.state.social) {
                                case 'Facebook':
                                  return <td style={paddingStyle}>
                                  <a href={`https://www.facebook.com/${signatureData.Facebook}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/2/5/5/2556e243-b6c3-522c-87ac-af1ae71d5fa1.png"/></a>
                                  </td>;
                              }
                             
                                 
                              
                              })()}
                              
                                
                                <td style={paddingStyle}>
                                  <a href={`https://twitter.com/${signatureData.Twitter}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/e/6/9/e6950ee0-d3a6-55fc-ab0b-84fb941d204f.png"/></a>
                                </td>
                               

                                <td style={paddingStyle}>
                                  <a href={`https://www.instagram.com/${signatureData.Instagram}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/3/c/5/3c52f8bd-b6e6-56c4-8a7e-ceb6e313bbad.png"/></a>
                                </td>

                                <td style={paddingStyle}>
                                  <a href={`https://www.linkedin.com/${signatureData.LinkedIn}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/1/c/f/1cf4f75e-0587-53d9-923f-79472558d74f.png"/></a>
                                </td>

                                <td style={paddingStyle}>
                                  <a href={`https://www.snapchat.com/add/${signatureData.Snapchat}/`}><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/2/d/3/2d36ab42-7ec7-5149-811d-f53e2cec495a.png"/></a>
                                </td>

                                <td style={paddingStyle}>
                                  <a href={`https://www.telegram.org/${signatureData.Telegram}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/0/2/5/02529738-aa51-5bd9-848e-2ca656aefa70.png"/></a>
                                </td>

                                <td style={paddingStyle}>
                                  <a href={`https://www.chat.whatsapp.com/${signatureData.Whatsapp}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/c/1/6/c1622954-f68e-5f1a-b14a-c4979b17e314.png"/></a>
                                </td>

                                <td style={paddingStyle}>
                                  <a href={`https://www.youtube.com/${signatureData.Youtube}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/e/f/6/ef6f4c68-2408-5e92-9603-899237fe140e.png"/></a>
                                </td>

                                <td style={paddingStyle}>
                                  <a href={`https://pinterest.com/${signatureData.Pinterest}/`} target="_blank" rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/0/8/b/08bc7e6a-29d4-5149-a2e5-f8d1b1209fe1.png"/></a>
                                </td>

                              </tr>

                             
                                {social}
                              
                          
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


