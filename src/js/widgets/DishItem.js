var React = require('react');

module.exports = React.createClass({
    render : function(){
        return (
            <li className="dish-list-item">
                <img src={this.props.src} />
                {this.props.name}
            </li>
        );
    }
});
