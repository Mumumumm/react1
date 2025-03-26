import logo from './logo.svg';
import './App.css';

//-------------------Header 컴포넌트------------------------
function Header() {
  return (
    <header>
      <h1><a href='/'>Header component</a></h1>
    </header>
  );
};

//-------------------Nav 컴포넌트-----------------------
function Nav() {
  return (
    <nav>
      <ol>
        <li><a href='/read/1'>HTML</a></li>
        <li><a href='/read/2'>CSS</a></li>
        <li><a href='/read/3'>JavaScript</a></li>
      </ol>
    </nav>
  );
};

//----------------Article 컴포넌트---------------------------
function Article() {
  return (
    <article>
      <h2>Wlecome</h2>
      Hello, Web
    </article>
  );
};


//-----------------부모App--------------------------
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
