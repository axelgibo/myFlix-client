import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

const MyFlixApplication = () => {
  return (
    <Container>
      <MainView />
      </Container>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyFlixApplication />);