import './style.css' 
import Offers from '../Hooks/Offers'
import {CaloriesCalculator} from '../Hooks/Calculator'
import Best from '../Hooks/Best'
import Quotes from '../Hooks/Quotes'
import Footer from '../footer/footer'

const Home = () => {
  return(
  <>
  <div>
    <body id='body1'>
    <CaloriesCalculator/>
    <Best/>
    <Quotes/>
    </body>
    <Footer/>
  </div>
  <Offers/>
  </>
  )
    }
export default Home

 


    
    
    
    