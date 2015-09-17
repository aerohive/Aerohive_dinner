var React = require('react'),
    DishList = require('../widgets/DishList');


var DishlistData = [
    {name : 'Dish1', src : 'dish1.jpg'},
    {name : 'Dish2', src : 'dish2.jpg'},
    {name : 'Dish3', src : 'dish3.jpg'},
    {name : 'Dish4', src : 'dish4.jpg'}
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
