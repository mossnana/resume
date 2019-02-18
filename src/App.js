import React, { Component } from 'react';

import MainLayout from './MainLayout';
import About from './sections/About';
import Resume from './sections/Resume';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

class App extends Component {
  render() {
    return (
      <MainLayout />
    );
  }
}

export default App;