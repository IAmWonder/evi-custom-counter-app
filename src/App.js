// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterPage from './CounterPage';
import './CounterPage.css';

const NotFound = () => <h1>404 - Not Found</h1>;

const ErrorBoundaryTest = () => {
  throw new Error('Testing error boundary');
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/error" element={<ErrorBoundaryTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
