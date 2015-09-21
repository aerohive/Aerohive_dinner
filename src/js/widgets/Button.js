var React = require('react');

module.exports = React.createClass({
    render : function(){
        return (
            <span className="ui-btn ui-btn-blue">{this.props.label}</span>    
        );
    } 
});
