const React = require('react');
const ReactDom = require('react-dom/client');

function App() {
  return <h1>Hello from React component!</h1>;
}

const root = ReactDom.createRoot(app);
root.render(<App />);
