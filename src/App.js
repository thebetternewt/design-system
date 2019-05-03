import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import Header from './layouts/Header';
import GlobalStyle from './Global';
import { Button, Card, Container } from './elements';
import Timer from './components/Timer2';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import Dashboard from './components/Dashboard';

// const theme = {
//   colors: {
//     primary: '#Ef4B4B',
//     secondary: '#DBDE61',
//   },
// };
// const themeTwo = {
//   colors: {
//     primary: '#524763',
//     secondary: '#82D8D8',
//   },
// };

// const themes = [theme, themeTwo];

const App = () => {
  // const [currentTheme, setTheme] = useState(0);

  // const toggleTheme = () => setTheme(currentTheme === 0 ? 1 : 0);

  return (
    <div>
      <Header />
      <GlobalStyle />
      <main>
        {/* <Button onClick={toggleTheme}>Toggle Theme</Button> */}
        {/* <Card>
          <h2>Card Heading</h2>
          <Card.Button href="#">Save</Card.Button>
          <Card.Button modifiers="cancel">Cancel</Card.Button>
        </Card> */}

        {/* <Timer /> */}
        <Container>
          <Dashboard />
        </Container>
      </main>
    </div>
  );
};

export default App;
