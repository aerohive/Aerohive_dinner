var Router = require('react-router');
var React = require('react');

// Router relation
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

// Main css load
require('./../css/reset');
require('./../css/atom');
require('./../css/layout');
require('./../css/ui');


// Dinner main components
var Home = require('./components/Home');
var Report = require('./components/Report');
var Admin = require('./components/Admin');
var Restaurant = require('./components/Restaurant');
var Header = require('./components/Header');



var App = React.createClass({
    render : function(){
        return (
           <div>
             <Header />
             <div id="main">
                <RouteHandler />
             </div>
           </div>
        );
    }
});


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="report" handler={Report}/>
    <Route name="restaurant" handler={Restaurant}/>
    <Route name="admin" handler={Admin}/>
    <DefaultRoute name="home" handler={Home} />
  </Route>
);


/**
 * @ HashLoaction #/url
 * @ HistroyLoaction /url
 */
Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
