import './App.css';
import ListOfSections from './components/ListOfSections';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useState } from 'react';

function App() {


  const [currentPage, setCurrentPage] = useState('Board');
  const [title, setTitle] = useState('');
  const renderPage = () => {
    switch (currentPage) {
      case 'Board':
        return <ListOfSections />;
      case 'Dashboard':
        return <Dashboard />;
      case 'About':
        return <About />;
      case 'Settings':
        return <Settings />;
      default:
        return <ListOfSections />;
    }
  };
  return (
    <main className='container'>
      <Sidebar
        setCurrentPage={setCurrentPage}
        setTitle={setTitle} />
      <Header
        setCurrentPage={setCurrentPage}
        title={title}
      />
      {renderPage()}
    </main>
  );
}

export default App;
