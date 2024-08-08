import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './ContainerApp'
// import CardApp from './Card';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import CardMediaApp from './CardMediaApp';
// import DrawyerApp from './DrawyerApp';
// import ToolsTip from './ToolsTip';
import ChartApp from './ChartApp';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CardApp /> */}
    {/* <CardMediaApp /> */}
    {/* <DrawyerApp /> */}
    {/* <ToolsTip />   */}
    <ChartApp />
  </React.StrictMode>,
)
