import logo from './logo.svg';
import './App.css';

//-------------------Header 컴포넌트------------------------
function Header(props) { // 부모에게 전달 받을 매개변수
  return (
    <header>
      <h1><a href='/'>{props.title}</a></h1>
    </header>
  );
};

//-------------------Nav 컴포넌트-----------------------
function Nav(props) {
  const lis = [
    // push 했으니 사라져도 되는 정보들
    // <li><a href='/read/1'>HTML</a></li>,
    // <li><a href='/read/2'>CSS</a></li>,
    // <li><a href='/read/3'>JavaScript</a></li>,
  ]
  for (let i = 0; i < props.topics_.length; i++) {
    let t = props.topics_[i];
    lis.push(<li key={t.id}><a href={/read/ + t.id}>{t.title}</a></li >);
  }
  return (
    <nav>
      <ol>
        {/* 배열을 풀어쓴것 */}
        {lis}
      </ol>
    </nav>
  );
};

//----------------Article 컴포넌트---------------------------
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
};



//-----------------부모App--------------------------
function App() {
  const topics = [ // 정보가 여러개여서 배열로 둔다 배열 객체는 뒤에 , 그리고 키:밸류가 한 쌍
    { id: 1, title: 'Html', body: 'Html....' },
    { id: 2, title: 'Css', body: 'Css....' },
    { id: 3, title: 'JavaScript', body: 'JavaScript....' },
  ];

  return (
    <div>
      <Header title="Header component"></Header>
      <Nav topics_={topics}></Nav>
      <Article title="Welcome" body="Home Work ... :)"></Article>
    </div>
  );
}

export default App;
