import './App.css';
import Allbanner from './components/Allbanner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div >
      <Nav/>
     <Allbanner fetchUrl={requests.fetchNetflixOriginals}/>
  <Row isPoster={true} title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
  <Row title="Trending In India" fetchUrl={requests.fetchTrending}/>
  <Row title="Top Rating Movies" fetchUrl={requests.fetchTopRated}/>
  <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
  <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
  <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
  <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
