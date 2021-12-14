import Search from './components/Search';
import './App.css';

const App = () => {
  const getsLogin = (login) => {
    console.log(login)
  }

  return (
    <Search getsLogin={getsLogin}/>
  );
}

export default App;
