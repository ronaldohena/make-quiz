import React, {Component} from 'react';
//components
// import Navbar from '../src/Navbar/Navbar';
// import Header from '../src/Header/Header';
// import Footer from '../src/Footer/Footer';
// import Main from '../src/Main/Main';
import User from '../src/User/User';

class App extends Component {


  render(){
    return (
    <div>

      <User />

      {/* firebase:test-e8087*/}

      {/* <Navbar/>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Ketu mund te gjeni telefon mobile , smartphone dhe cdo 
                  paisje e cila do tju nevoijtet.. 
                </h2>
                <h3 className="post-subtitle">
                  Per me shume kaloni tek ne!
                </h3>
              </a>
              <p className="post-meta"><span> Postuar nga </span>  
                <a href="#">Ronaldo Hena</a>
                <span> ne Korrik 24, 2019</span></p>
            </div>
            <hr/>
            
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <Footer />
      <Main />  */}
    </div>
    );
  }
}


export default App;
