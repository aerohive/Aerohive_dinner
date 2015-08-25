var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

require('./../../css/header');

var logo = require('./../../image/logo.png');

module.exports = React.createClass({
    render : function(){
        return (
            <header className="hd">
                <div className="hd-inner clearfix">
                    <h1 className="hd-logo"><a href="#"><img src={logo} alt="logo" /></a></h1>
                    <nav className="hd-nav">
                        <ul>
                            <li><Link to="app">Home</Link></li>
                            <li><Link to="report">Report</Link></li>
                            <li><Link to="restaurant">Restaurant</Link></li>
                            <li><Link to="admin">Administrator</Link></li>
                        </ul>        
                    </nav>
                </div>
            </header>
        );   
    }
});
