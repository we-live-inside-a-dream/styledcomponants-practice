import {Button, ButtonLabel} from './components/Button.style'

import './App.css';
import { AppContainer } from './components/Container.style';

function App() {
  return (
    <AppContainer className="App">
      <Button><ButtonLabel>Click this Button</ButtonLabel></Button>
      <Button backgroundColor="red">Click this Button</Button>
    </AppContainer>
  );
}

export default App;
