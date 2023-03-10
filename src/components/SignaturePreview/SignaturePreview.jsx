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
    const main = this.props.mainRRSS;

        
    
    

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

    
    let partialFacebook;
    let partialTwitter;
    let partialInstagram;
    let partialLinkedIn;
    let partialSnapchat;
    let partialTelegram;
    let partialWhatsapp;
    let partialYoutube;
    let partialPinterest;

    const facebookArray = social.filter(sociales => {
      return sociales == signatureData.signatureFacebook
    })

    const twitterArray = social.filter(sociales => {
      return sociales == signatureData.signatureTwitter
    })
    
    const instagramArray = social.filter(sociales => {
      return sociales == signatureData.signatureInstagram
    })

    const linkedInArray = social.filter(sociales => {
      return sociales == signatureData.signatureLinkedIn
    })

    const snapchatArray = social.filter(sociales => {
      return sociales == signatureData.signatureSnapchat
    })
    
    const telegramArray = social.filter(sociales => {
      return sociales == signatureData.signatureTelegram
    })

    const whatsappArray = social.filter(sociales => {
      return sociales == signatureData.signatureWhatsapp
    })

    const youtubeArray = social.filter(sociales => {
      return sociales == signatureData.signatureYoutube
    })
    
    const pinterestArray = social.filter(sociales => {
      return sociales == signatureData.signaturePinterest
    })

    

  
    if(facebookArray == signatureData.signatureFacebook){

       partialFacebook = <a href={`https://www.facebook.com/${signatureData.Facebook}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/2/5/5/2556e243-b6c3-522c-87ac-af1ae71d5fa1.png"/></a>

     } if(twitterArray == signatureData.signatureTwitter) {

       partialTwitter = <a href={`https://twitter.com/${signatureData.Twitter}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/e/6/9/e6950ee0-d3a6-55fc-ab0b-84fb941d204f.png"/></a>

     } if(instagramArray == signatureData.signatureInstagram) {

       partialInstagram = <a href={`https://www.instagram.com/${signatureData.Instagram}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/3/c/5/3c52f8bd-b6e6-56c4-8a7e-ceb6e313bbad.png"/></a>

     } if(linkedInArray == signatureData.signatureLinkedIn) {

       partialLinkedIn = <a href={`https://www.linkedin.com/${signatureData.LinkedIn}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/1/c/f/1cf4f75e-0587-53d9-923f-79472558d74f.png"/></a>

     } if(snapchatArray == signatureData.signatureSnapchat) {

       partialSnapchat = <a href={`https://www.snapchat.com/add/${signatureData.Snapchat}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/2/d/3/2d36ab42-7ec7-5149-811d-f53e2cec495a.png"/></a>

     } if(telegramArray == signatureData.signatureTelegram) {

       partialTelegram = <a href={`https://www.telegram.org/${signatureData.Telegram}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/0/2/5/02529738-aa51-5bd9-848e-2ca656aefa70.png"/></a>
      
     } if(whatsappArray == signatureData.signatureWhatsapp) {

       partialWhatsapp = <a href={`https://www.chat.whatsapp.com/${signatureData.Whatsapp}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/c/1/6/c1622954-f68e-5f1a-b14a-c4979b17e314.png"/></a>

     } if(youtubeArray == signatureData.signatureYoutube) {

       partialYoutube = <a href={`https://www.youtube.com/${signatureData.Youtube}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/e/f/6/ef6f4c68-2408-5e92-9603-899237fe140e.png"/></a>
      
     } if(pinterestArray == signatureData.signaturePinterest) {

       partialPinterest = <a href={`https://pinterest.com/${signatureData.Pinterest}/`} target="_blank" without rel="noopener noreferrer"><img alt="" width="28px;" width="28" src="https://img.mysignature.io/s/v3/0/8/b/08bc7e6a-29d4-5149-a2e5-f8d1b1209fe1.png"/></a>
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
          <div>Asunto: ??Probando mi firma de correos!</div>
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

                              <td name="signatureFacebook" style={paddingStyle}>
                                {partialFacebook}
                              </td>

                              
                                <td name="signatureTwitter" style={paddingStyle}>
                                  {partialTwitter}
                                </td>

                                <td name="signatureInstagram" style={paddingStyle}>
                                  {partialInstagram}
                                </td>

                                <td name="signatureLinkedIn" style={paddingStyle}>
                                  {partialLinkedIn}
                                </td>

                                <td name="signatureSnapchat" style={paddingStyle}>
                                  {partialSnapchat}
                                </td>

                                <td name="signatureTelegram" style={paddingStyle}>
                                  {partialTelegram}
                                </td>

                                <td name="signatureWhatsapp" style={paddingStyle}>
                                  {partialWhatsapp}
                                </td>

                                <td name="signatureYoutube" style={paddingStyle}>
                                  {partialYoutube}
                                </td>

                                <td name="signaturePinterest" style={paddingStyle}>
                                  {partialPinterest}
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


