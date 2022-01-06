/**
 * @Copyright 2022 meituan Inc, All Rights Reserved.
 * @author: zhengjiaqi02
 * @createTime: 2022-01-06 11:25:23
 * @lastEditTime: 2022-01-06 12:46:29
 * @lastEditor: zhengjiaqi02
 * @description: 文件描述
 */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />2
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
