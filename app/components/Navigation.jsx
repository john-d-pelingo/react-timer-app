let React = require('react');
var {Link, IndexLink} = require('react-router');

// Link provides us with the ability to add custom styles and classes to the link that is for the current page.
// Route corresponds to Link
// IndexRoute corresponds to IndexLink
// let Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h2>Nav component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//             </div>
//         );
//     }
// });

// Stateless functional component
// Doesn't maintain any state
// Use className for HTML classes
// jsx takes className and convert it to class before it shows it to the browser
// Using Menu and Top Bar Foundation components
let Navigation = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Timer App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Timer
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="https://github.com/a-butterfly-effect" target="_blank">John
                            Darryl Pelingo</a></li>
                    </ul>

                </div>
            </div>
        );
    }
});

module.exports = Navigation;
