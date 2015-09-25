var React = require('react');

module.exports = React.createClass({
    
    _handleClick : function(e){
        
        this.props.onBtnClick(e);
    },

    render : function(){
        return (
            <span onClick={this._handleClick} className="ui-btn ui-btn-blue">{this.props.label}</span>    
        );
    } 
});
