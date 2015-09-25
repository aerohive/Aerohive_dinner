var React = require('react');
var Button = require('./Button');

module.exports = React.createClass({

    getInitialState : function(){
        return {
            active : false
        }
    },

    _handleMouseOver : function(e){
        this.setState({active : true});
    },

    _handleMouseOut : function(e){
        this.setState({active : false});
    },

    _handleBtnClick : function(e){
        
    },

    render : function(){
        return (
            <li className={this.state.active ? 'dish-list-item active' : 'dish-list-item'} onMouseEnter={this._handleMouseOver} onMouseLeave={this._handleMouseOut}>
                <img src={this.props.src} />
                <div className="dish-list-item-mask">
                    <p className="dish-list-item-des">{this.props.name}</p>
                    <Button label="Book" onBtnClick={this._handleBtnClick} />
                </div>
            </li>
        );
    }
});
