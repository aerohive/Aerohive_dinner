var Router = require('react-router');
var React = require('react');

// Router relation
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


// Dinner main components
var Home = require('./components/Home');
var Report = require('./components/Report');
var Admin = require('./components/Admin');
var Restaurant = require('./components/Restaurant');


var App = React.createClass({
    render : function(){
        return (
            <div id="main">
                <ul clasName="header">
                    <li><Link to="app">Home</Link></li>
                    <li><Link to="report">Report</Link></li>
                    <li><Link to="restaurant">Restaurant</Link></li>
                    <li><Link to="admin">Administrator</Link></li>
                </ul>

                <div>
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
    <DefaultRoute handler={Home}/>
  </Route>
);


/**
 * @ HashLoaction #/url
 * @ HistroyLoaction /url
 */
Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
