import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/common/Footer';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <>
    <GlobalStyle/>
     <div className="container">
      <div className="row">
        <div className="col col-md-4 col-lg-8">adsds</div>
        <div className="col md-4 col-lg-4">adsddds</div>
        <div className="col md-4 col-lg-4">adsddds</div>
        <div className="col md-4 col-lg-4">adsddds</div>
        <div className="col md-4 col-lg-4">adsddds</div>
        <Footer/>
      </div>
      </div>
    </>
  );
}
export default App;
