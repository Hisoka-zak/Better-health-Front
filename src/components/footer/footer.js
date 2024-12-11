import React from 'react'
import { Link } from 'react-router-dom'





const footer = () => {

  return(
  <>
    <footer class='fff' style={{marginTop: '90px'}}>
        <div class="container">
            <div class="footer-content">
                <h3>Better Health</h3>
                <p>Choosing nourishing meals isn't just about eating; it's a promise to your body. Every bite fuels vitality, offering a path to a vibrant life.
                   Embrace wholesome foods, savor the journey to wellness, and let your plate be a canvas for your well-being</p>
                </div>
                <div class="footer-social">
                    <h3 class='h3'>Follow Us</h3>
                    <div class="social-links">
                <i class="bi bi-whatsapp">
                  </i>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="https://api.whatsapp.com/send/?phone=95616133&text&type=phone_number&app_absent=0" class='link'>
                    + 968 9561 6133</Link><br/>
                <i class="bi bi-whatsapp">&nbsp;&nbsp;&nbsp;&nbsp;
                  </i><Link to="https://api.whatsapp.com/send/?phone=92670431&text&type=phone_number&app_absent=0" class='link'>
                    + 968 9267 0431</Link><br/>
                <i class="bi bi-instagram">
                  </i>&nbsp;&nbsp;&nbsp;<Link to="https://www.instagram.com/betterhealthmarket/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" class='link'>
                    better health&nbsp;</Link>
                </div>
                </div>
            </div>
        <p class="footer-bottom">&copy; 2023 Better Health. All rights reserved.</p>
    </footer>
  </>
  )
    }
    export default footer