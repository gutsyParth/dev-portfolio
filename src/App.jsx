import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
