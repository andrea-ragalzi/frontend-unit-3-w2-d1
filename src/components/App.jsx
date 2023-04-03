import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
        <Welcome></Welcome>
      </header>
      <main>
        <AllTheBooks className='all-the-books' />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
