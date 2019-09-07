import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SocialNetworks.styles';
import './RrssStyles.scss'

class SocialNetworks extends Component { 
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

    const mainRRSS = this.props.mainRRSS
    .map((icons, i)=>{
      return (
        <span key={i}>{icons} 
          <input type="text" 
          name={icons}
          value={this.state.value}
          onChange={this.props.rrss}
          placeholder="@usuario"/>
        </span>
        )
    })
    
    return (
      <div className="SocialNetworksWrapper">

        {mainRRSS}
          <div className="rrss-list">
            <button className="rrss-icon" type="button" value="Facebook"  onClick={this.props.addRrss}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU7V53///8yUZogRZXn6vKKl785VZxAW6Dh5O5yg7QmSZbR1uU2U5skR5ZNZqWps9DK0OKTn8QrTJhlea57i7nw8ve+xttccqva3uqyu9Vpe7CPnMKapsjj5/Bsf7K6wtkAMY2Bj7sVP5JTa6j19/ukrs1FoiZVAAAD+klEQVR4nO3dbW+bMBSGYWOIkzrmzSRpurbrutL//xeXl0bdNI06YfY5x3puqeqnUi4BcYKBqOKjrh+WKpeWQ99dYOr8q3VWO0O9Yv8t47R17W/CqrHU6xQh21QX4d466rWJkrP7s7Cq89k9/8zU1UnY5LkFj7nmKGxzPAYv2fYgzHcLHnOF6mrqlYha3aleU69E1HSvhsz30m9qmetQcc7k81YUIYQQQgghhBBCCKFbc9p7W39WHn6stf6Q1trIPkdotK/dsGh361U1jkVRjOO43VbPq/262708vPeLzdAYXwudNXO+bha7qvi67UrJIxpfvrUhuo8pbGkZ7/vnYJ48ofHm4RqeOKH27ZU+WUJTvo5XAyUJtVtf75MktN9v8QkSlk+3AcUIy2tfQqUJy92tQCHCGUAZwvr6UVCW0C9mACUI3dscoAChsdvMhfbmcUKI0N3PA/IXlqvMhfp1JpC9sA4/XSFTOH8TchfOPgq5C83cF1L2Qv+Su9DOB/IW6k3uQj/jY6EM4cz33PyFMz82CRDqx+ss29V+/Vd7znNPVxyG4+610cfJ0b9jDFQ29A3N86b2Emd8jQ4E9qXQ25ZMEwYcPPWa3pq+CwLeiQUq3YcAHwTfOhg2Gyr0EDwVNFi8SL6B13ZfA4vvku+NtCFTvlreKPhZHTDgrwS/zhyEAZfN7CQfhqoMOJHYyh0MVZjwSfJgESR8zF64gJB1EELIPwgh5B+EEPIPQgj5ByGE/IMQQv7lITT/LlA4sYTTUqhbTmRDhGZqCcdojS5slndOFe1p/8B57Dl12QsfaCc2EgiJn5+bQLjJXvhGOwueQEg8zR9fOBLPgscXUs/zxxcSD4cJhNTz/PGF1LPg8YXUl0zFFzbEH5/iC33uwi31RWHRhfvshTvqi8KiC9+zF5KfiosuJP92lehC8m9XiS0cqQ/D6MKKerCILlyTXyMdW0h8KjGBkP4a6djCDfVgEV14Tz1YRBdS+6IL6YfD2ELqU4nxhdSnEtXxe/mq1UQBiKm/f34nHywOxHqiHwF3dr3+nFgAA+B0eVyLMRWEEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5F9CIdFTz1IJzVIRPbkuldANiujZ9KmEulcdzZNsUgltp4ge3Z5sLy1U0ZI8rCeR0LYHYdFQbMU0QtcUR2FlCQaMJEJTVydhsa/Tb8UUQmf3xVlYVE3yYzGB0Dan/6HOC2ud1S7lzhpXaJy2rj0vRV0W1/XD8n8SviiucDn03WUpvwDZiExyVZmqhQAAAABJRU5ErkJggg==" alt=""/></button>
            <button className="rrss-icon" type="button" value="Twitter"  onClick={this.props.addRrss}><img src="data:image/png;base64,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" alt=""/></button>
            <button className="rrss-icon" type="button" value="Instagram"  onClick={this.props.addRrss}><img src="data:image/jpeg;base64,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" alt=""/></button>
            <button className="rrss-icon" type="button" value="LinkedIn"  onClick={this.props.addRrss}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAd7f///8AcrUAbrMAdbbK3Ou30uaMttcAc7U/jcJ7rdKGsNN0pM2vy+IAbLIAa7L3+/0Le7ns9Pnh7fVZmcjY5/Kox+Aafrvy+fxIkcTA1+mbwNwzh7+0z+Td6vNspM2UvNrR4u9insoAZrAjhL6yZ374AAAHJklEQVR4nO2d6ZaqvBKGQxIxtJsgiuDc6uH+r/GAQ7fSDEVClMqX91+v1WAeMleqKsR70WI7TfKYYFWcJ9Pt4hWJPP9x2EhGBf90OTXEBWVy4zcQpjETny7hIBIyDmsIjzn7dMkGlNwvq4ShtKP+HhLs8Ep4ijD3vjrxaPdMeIo+XSADuiNeCUMbAQvEw4NwKW1rojdxtrgT7u0aZH7FgxthatM08SoZXgntbKJX8bgkDO2twqIS/YIwsLUXlhKJRxby06UwKrYmvs2NtCDckhn9dCGMip5IYnM3LDriN8ktnixIOekTvCYLkHj26RI4ORkQv+rTpTAkzqmM6D4I9jxCbnWsFWci2Z3XN+PHfJVeiCXGx7tEtA/nr8Zkb7uJ7GGUm4lXo9XFEhudENs6vlLnzIZ1LdtU2+ezvvFvv+Ssha9Qit1UF6XtgMWIg9vcynZdgJ53wIzIvroBPW+H11AgAgig512wjqg3uzhA80+XVFWsc5R5yMc5Z/AMCughNbv+nKMCNMFYiZzDAT0Po0mLTvsQ7hAOp/LYh3CBcNrvMc6U2qNrpuK7HyG+8wEKngxvOqBburHabX2zVugI+w00xVCDjjACrkkfWqOzL/Yl9Ag2QrnshkJO2LMfztEZ+/uOpfhGGhp2Uz3rjI+ww4pYFT7XI77vR/iNbw/M1r0I0Q2lBWGvjnhGuMkXmz6EX+i2FqTfnD9Ht2Yr1WeHeMJYhX2WNXOEvbAU1KhfTBU4qxB28lRqi7QKCbSdrinGYeYmHkOmfdTxDDxrO8S/KcDaCW8SWcdef44csEDkqzbAZYa5id4lWw4w0Hti3MTycz3fMcA7TbyK17p9rRKbIk+FzKcv/fF42tvEV4pTSZNp6G+3fji9FH9Y0QEr4pxSVoha6D/r5OTkZKd4OXgjtMJ2SxQzkowiSuIszzMaRZIZD+8QzWo+UuMtTzUuhiiTWXJKJ8enLdt6OQlPl1wyU7s0TtnmX6MSWn8gw1ne/NC/S1zzVPFD8Vc1RdCvFv4sNgLJ6a59l3+o6yo06bAmT6pPcZmdOo1Cq2k8/GJYnrt+dvGXkF66HvIWL7GdQibAA1k/GJgRcjzz91AmBhR1+9RQo6TVjlD5uWE3pSDntk3lq9IT5Kkff00aN8bk1Mvnw/VHCvPVr/wgzAXgcvsuPOrpQFdoPlzAFczHtOrSBiO8ncdx5nf/a91PDoQII6wmZuhBKHhft527jmSYAcc0Ie+yxjZrng+CaJhQgA4NjCKaJYSdijQjDrEsN0vY17GsquUA1jCjhP9TGkWfNUBgoEnCb9Bc2y59DxCThL3COZqkHchiknAQrXTb6egJtX0kxk+o60MwfkJdXyUEhJr+ZggIvalWJWIg1Euqh4HQ08rIhoJQy+cMBaGWAzYOQp1ZHwfhViMQAgehp7E4RUKoMZoiIdQIlX8v4XyxXC5VjG8r9fnifYTLNIkpux6GBrO+z2tEBr6LcLKJqLhPa5xTRkAnH79STzzyHsJFUs1tx2m/4ED1ZABvIfTr8hNy2X0G+Sv10MB3EDZdrkH33S7mD6knA3gD4a5xuqbw0LK58pxvntBvKRss09hVyotv44SLVkNSBH5R9Rh6PITtJeM59D3KMbqmCQ8dixFwqiplY41pwqyj+4DDrcOREnZPYxLohqJ8A4Jhwq4qhKfjUg60Nkt47p7FoFnxluMkhJz+AZPIKGflMEsIubYA6G6jnP/HKCFo3wrsiMo7RKOEINsDNO9BPEbCBFQo4FCjepGFUUJQ1+EUtodSPdA3SQg8MwIOpqpJDU0STmADPDujJUxhS0lgkw9GSAjcDjCYA7HqBtG4fymAEDblYyaEmRUdoSP8JCHMkIGZEDbSqB4h4iFU9TTFQ6h6NjMGQthI4wgdoSN0hI7QETpCR+gIHaEjdISO0BE6QkfoCB2hI3SEjtAROkJH6AgdoSN0hI7QETpCR+gIHaEjdISO0BE6QkfoCB2hI4QIdiXwn7z6oEAeYBoECrvt9Z+iJzvnkLdXo6pgF88DYyJ5AiJUjbAEfcE/CeG4AERF+tD4ctDl2coZBwiJOlvc8W96EkDwLjzbOM+7v5dW7nL51RrEuT7VfT267xhsgMGHV4ms6yunehn2qcyDRu2j+q/HWdz8UBCwXt+cM972sn2/t9X+QouUHupdoNaX2Xitl9N/S8oTJRJlJP90EQwrJ1qZoscvkRD1lIooRGdEYz2HQWxL9FK2j15yQTRymyJQsQMgXmpzM2VhQehZvazzSkKLK5GlV0L9C4XGKlEmXSwJj5YOp/xq/iDXHbL+3V5jVHQ1Q14JvZmNtRjdUoLfCL2ZdbXI74APQi+Vdg03Qj5yvjwIvWM21NWlIxBn+Y+N9YewvPvKEkbBxJMZ+4nQm6eBZC2XpSMQ54LJIH02pT4TFlqEX5sMklV0nIqzzdehYr/+PyJejj+qK5H5AAAAAElFTkSuQmCC" alt=""/></button>
            <button className="rrss-icon" type="button" value="Snapchat"  onClick={this.props.addRrss}><img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/snapchat-512.png" alt=""/></button>
            <button className="rrss-icon" type="button" value="Telegram"  onClick={this.props.addRrss}><img src="http://telegram.com.es/wp-content/uploads/2018/02/telegram.png" alt=""/></button>
            <button className="rrss-icon" type="button" value="Whatsapp"  onClick={this.props.addRrss}><img src="data:image/png;base64,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" alt=""/></button>
            <button className="rrss-icon" type="button" value="Youtube"  onClick={this.props.addRrss}><img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png" alt=""/></button>
            <button className="rrss-icon" type="button" value="Pinterest"  onClick={this.props.addRrss}><img src="data:image/png;base64,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" alt=""/></button>
            
          </div>
      </div>
    );
  }
}

SocialNetworks.propTypes = {
  // bla: PropTypes.string,
};

SocialNetworks.defaultProps = {
  // bla: 'test',
};

export default SocialNetworks;
