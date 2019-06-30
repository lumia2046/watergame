import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GetRouter from 'router/router';
import 'style/normalize.css';
import 'style/base.scss';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
ReactDOM.render(<GetRouter />, app);