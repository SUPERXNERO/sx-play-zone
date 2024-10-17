// imports
import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppBar,
  Badge,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';

// variables


// contexts
const LangContext = React.createContext();
const ThemeContext = React.createContext();

const App = () => {
  const [lang, setLang] = React.useState(navigator.language.split("-")[0]);
  const [theme, setTheme] = React.useState("light");
  console.log("yes");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AppBar position="fixed" color="primary" elevation={4}>
          <Toolbar>
            <Typography variant="h6">
              My App
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
};

function changeElementLang(key, {
  nestedKey = null, variableValue = null
} = {}) {
  var value = langContent[key];
  if (nestedKey) {
    value = value[nestedKey];
  }
  if (variableValue) {
    value = value.replace(/\$\{(.*?)\}/g, (_, variable) => {
      const keys = variable.split('.');
      return keys.reduce((acc, key) => acc && acc[key], {variableValue});
    });
  }
  return value;
}

// Render the App component to the root div
ReactDOM.render(<App />, root);