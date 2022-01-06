/**
 * @Copyright 2022 meituan Inc, All Rights Reserved.
 * @author: zhengjiaqi02
 * @createTime: 2022-01-06 11:16:29
 * @lastEditTime: 2022-01-06 12:40:19
 * @lastEditor: zhengjiaqi02
 * @description: 文件描述
 */
import logo from './logo.svg';
import './App.css';
import { Thing } from '@shared/components';

function App() {
  return (
    <div className="App">
      <Thing />222
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
