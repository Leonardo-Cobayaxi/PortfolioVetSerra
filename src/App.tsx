import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Presentation from './components/Presentation/Presentation';
import { createGlobalStyle } from 'styled-components'
import './App.css';

const GLobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,h2,h3,h4,span,p,button {
  font-family: Montserrat
}
button:hover{
  cursor:pointer
}
h1,h2,h3,h4,span,p:hover{
  cursor:default
}
`
function App() {
  return (

    <div className="App">
      <GLobalStyle />
      <Header />
      <Presentation />
      <Footer />
    </div>

  );
}

export default App;
