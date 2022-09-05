import pauseMobile from "./images/pattern-divider-mobile.svg"
import pauseDesktop from "./images/pattern-divider-desktop.svg"
import dice from "./images/icon-dice.svg"
import { useState, useEffect } from "react";




function App() {
  const [text, setText] = useState([]); // burada köşeli parantez yerine tırnak kullanırsam buton onClick olmadan devamlı verileri getirir
  const API_LINK = "https://api.adviceslip.com/advice"
  
  const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json()
    console.log(advice)
    setText(advice.slip)
  }

  useEffect(() => {
    fetchNewAdvice()
  }, [])



  return (
    <div className="container">
      <h1> Advice # {text.id}</h1>
      <p>{text.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>
      <div>
        <button onClick={(fetchNewAdvice)}>
          <img src={dice} alt="" />
        </button>
      </div>
     
    </div>
  );
}

export default App;
