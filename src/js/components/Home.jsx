var React = require('react'),
    DishList = require('../widgets/DishList');


var img = require('../../image/food_l.png');
var DishlistData = [
    {name : 'Dish1', src : img},
    {name : 'Dish2', src : img},
    {name : 'Dish3', src : img},
    {name : 'Dish4', src : img}
];

module.exports = React.createClass({
    render : function(){
        return (
            <div>
                <aside className="top-sider">TOP10</aside>
                <section className="dish-area">
                    <DishList data={DishlistData} />
                </section>
            </div>    
        );
    }
});
