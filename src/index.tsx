import React from 'react'
import ReactDOM from 'react-dom'
import WithHooks from './WithHooks.tsx'

const App: React.FC = () => {
  return <WithHooks />
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App
