import './App.css';
import RepoPage from './Components/RepoPage/RepoPage';
import SignInPage from './Components/SignInPage/SignInPage';

function App() {
  return (
    <div className="App">
      <h1>Signin Page</h1>
      <SignInPage/>
      <h1>Repository Page</h1>
      <RepoPage/>
    </div>
  );
}

export default App;
