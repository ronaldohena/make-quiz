import React, { Component } from 'react';

class Header  extends Component {
    render() {
        return (
            <header className="masthead" style={{backgroundImage: "url('img/download.jpeg')"}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Buy now</h1>
                                <span className="subheading">Phone store Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        );
    }
}
export default Header;
