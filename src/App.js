import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//-------------------Header 컴포넌트------------------------
function Header(props) { // 부모에게 전달 받을 매개변수
  return (
    <header>
      <h1><a href='/' onClick={(e) => {
        e.preventDefault();
        props.changeMode();
      }}>{props.title}</a></h1>
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
    lis.push(<li key={t.id}>
      <a id={t.id} href={/read/ + t.id} onClick={(e) => { // onClick 이벤트 만들기  id={t.id} a 태그의 속성으로 t.id를 넘기면 문자열화
        e.preventDefault();
        props.navMode(Number(e.target.id)); // (Number(e.target.id)) target인 a태그의 id를 Number해서 숫자화
      }}>{t.title}</a>
    </li >);
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

//----------------Create 컴포넌트---------------------------
function Create(props) {
  return (
    <article>
      <h2>create</h2>
      <form onSubmit={e => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title 입력'></input></p>
        <p><textarea name='body' placeholder='body 입력'></textarea></p>
        <p><button type='sbumit'>Create</button></p>
      </form>
    </article>
  );
};



//-----------------부모App--------------------------
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [next, setNext] = useState(4);
  const [topics, setTopics] = useState([ // 정보가 여러개여서 배열로 둔다 배열 객체는 뒤에 , 그리고 키:밸류가 한 쌍
    { id: 1, title: 'Html', body: 'Html....' }, // state 이후 배열에 create로 객체 추가 useState(4) 번 이후
    { id: 2, title: 'Css', body: 'Css....' },
    { id: 3, title: 'JavaScript', body: 'JavaScript....' },
  ]);

  let content = null;
  switch (mode) {
    case 'WLECOME':
      content = <Article title="Welcome" body="Home Work ... :)"></Article>
      break;

    case 'READ':
      let title, body = null;
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id === id) {
          title = topics[i].title;
          body = topics[i].body;
        }
      }
      content = <Article title={title} body={body}></Article>
      break;

    case 'CREATE':
      content = <Create onCreate={(_title, _body) => {
        const newTopic = { id: next, title: _title, body: _body }
        const newTopics = [...topics] // 기존 객체 복제후
        newTopics.push(newTopic); // newTopics 배열에 newTopic 을푸쉬
        setTopics(newTopics); // 복제한 topics를 setTopics

        setMode('READ'); // 상세보기 나오게 하는방법
        setId(next); // id를 next (4) 즉 다음에 나올 배열의 길이는 4번이 된다
        setNext(next + 1); // 이후 state가 set으로 변할때+1 해서 계속 쌓을수 있게한다.
      }}></Create>

  }

  return (
    <div>
      <Header title="Header component" changeMode={() => {
        setMode("WLECOME");
      }}></Header>
      <Nav topics_={topics} navMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>

      {/* content가 곧 Article switch 문으로 케이스마다 다른 Article이 나오게 했다 */}
      {content}

      {/* create 하기 */}
      <a href='/create' onClick={(e) => {
        e.preventDefault(); // 기본이벤트 제거
        setMode('CREATE'); // 클릭 이벤트 발생시 setMode 가 CREATE 로 변경
      }}>create</a>
    </div>
  );
}

export default App;
