

import React, { FunctionComponent } from 'react';

const style: any = {};
style.html = {
  height: '100%',
  margin: 0,
  padding: 0,
  width: '100%'
};
style.body = { ...style.html, display: 'table', 'background-color': 'black' };
style.a = { color: 'white', 'font-size': '100px' };
style['.my-block'] = {
  'text-align': 'center',
  display: 'table-cell',
  'vertical-align': 'middle',
  color: '#FFF',
  'font-size': '36px',
  'font-family': "\"Courier New\", Courier, monospace"
}

const SpecialEvent: FunctionComponent<any> = (props) => {
  return <div>
    <style>
      {`
         html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          width: 100%;
          background-color: red
      }
      body {
          display: table;
          background-color: black;
       
      }
      a{
          color: white;
          font-size: 36px;
          text-decoration: underline
      }
      .my-block {
          text-align: center;
          display: table-cell;
          vertical-align: middle;
          color: #FFF;
          font-family: "Courier New", Courier, monospace
      }
      a:hover{
        color: white !important;
      }
      .center {
        margin: auto;
        width: 50%;
        padding: 10px;
      }
      `}
    </style>
    <div>
      <div className="my-block center">
        <a href="mailto:Michael.Hancock@denvergov.org,dencc@denvergov.org,districtone@denvergov.org,kevin.flynn@denvergov.org,jamie.torres@denvergov.org,kendra.black@denvergov.org,amanda.sawyer@denvergov.org,paul.kashmann@denvergov.org,jolon.clark@denvergov.org,christopher.herndon@denvergov.org,district9@denvergov.org,chris.hinds@denvergov.org,stacie.gilmore@denvergov.org,lccpd@littletongov.org,lcccf@littletongov.org,lccpg@littletongov.org,lccsm@littletongov.org,lcckm@littletongov.org,lccjv@littletongov.org,WeaverS@bouldercolorado.gov,josephj@bouldercolorado.gov,brocketta@bouldercolorado.gov,friendr@bouldercolorado.gov,naglem@bouldercolorado.gov,swetlika@bouldercolorado.gov,wallachm@bouldercolorado.gov,yatesb@bouldercolorado.gov,youngm@bouldercolorado.gov?bcc=info@dbl.bike&subject=Denver%20Critical%20Mass&body=After%20three%20people%20died%20on%20bikes%20this%20week%2C%20the%20Denver%20Bicycle%20Lobby%20is%20once%20again%20asking%20that%20you%20support%20safe%2C%20protected%20bike%20lanes%20and%20infrastructure%20so%20we%20can%20survive.%0D%0A%0D%0ASent%20from%20the%20Denver%20Critical%20Mass%20Ride%20%232%0D%0A%0D%0A%0D%0A" rel="EMAIL">Send your Critical Mass Email</a>
      </div>
    </div>
  </div>

}

export default SpecialEvent