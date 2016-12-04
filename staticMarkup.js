import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Component from './components/Home';
console.log(ReactDOMServer.renderToString(<Component />));
