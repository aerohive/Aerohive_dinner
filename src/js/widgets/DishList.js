var React = require('react'),
    Dish = require('./DishItem');

module.exports = React.createClass({
    render : function(){
        return (
            <ul className="dish-list clearfix">
                {
                    this.props.data.map(function(item){
                        return <Dish name={item.name} src={item.src} />
                    })
                }
            </ul>
        );
    }
});
