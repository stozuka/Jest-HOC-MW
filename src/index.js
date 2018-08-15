import React from 'react';
import ReactDom from 'react-dom';
import Root from 'Root';
import App from 'components/App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDom.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
