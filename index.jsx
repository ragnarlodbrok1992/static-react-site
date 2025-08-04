const React = require('react');
const ReactDom = require('react-dom/client');

function App() {
  const [count, setCount] = React.useState(0);
  const clickMe = () => {
    setCount(count + 1);
  };
  return <button onClick={clickMe}>Click me! ({count})</button>;
}

const root = ReactDom.createRoot(app);
root.render(<App />);
