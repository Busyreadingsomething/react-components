// TODO

// declare each view with CapitalCase

// new Class extends from the React.Component SuperClass
class GroceryItems extends React.Component{
  // creates the basic props
  constructor(props) {
    // calls React.Component
    super(props);
    // an object literal
    this.state = {
      done: false,
      bold: false,
      color: false,
      back: false
    };
  }

  // method invoked when click event happens
  // uses setState to change the done property
  // setState is a method that takes in an updater and an optional callback
  // the equivalent to this.set(xyz) : this.setState(xyz)
    // may not always update the component
    // use a componentDidUpdate()
    // guaranteed to fire after it has updated
  // componentDidUpdate takes in two parameters - preProps and prevState
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // method invoked when the mouse enter and leaves event happens
  // uses setState to change the done property
  onListItemHover() {
    this.setState({
      bold: !this.state.bold,
      color: !this.state.color,
      back: !this.state.back
    });
  }

  // Renders the component by expecting an item from the props

  render() {
    // style variable made with conditionals to switch between different styles
    // when done is changed: it will switch between line-through and done
    // when bold is changed: changes between bold and normal
    // set the css style as you normally would
    // the results depend on the condition of the state you are observing
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.bold ? 'bold' : 'normal',
      color: this.state.color ? `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` : 'black',
      backgroundColor: this.state.back ? 'yellow' : 'white'
    };

    // the returned component has the style set to the element
    // each listener is set on the component as well
    // List of listeners:
      // ************************************ //
      // xxxx GO HERE xxxxxxxxxxxxxxxxxxxxxxx //
      // ------------------------------------ //
      // https://reactjs.org/docs/events.html //
      // ------------------------------------ //
      // xxxxxxxxxxxxxxxxxxxxxxx GO HERE xxxx //
      // ************************************ //
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

var List = (props) => {

  var onListItemClick = (event) => {
    console.log(`YOU NEED THIS *insert*item*name*here*`);
  };

  // loops through the items array and returns a new instance of Grocery Item
  // with each item in the items array
  return (
    <ul>
      {props.items.map(item =>
        <GroceryItems item={item} />
      )}
    </ul>
  );
}


//component format
// declare the views with "<ViewName />" format

let list = ['Half Gallon of Whole Milk', 'Chocolate Cereal', 'Stick of butter', 'Loaf of bread', 'Strawberry IceCream'];

var GroceryList = () => (
  <div id='gorcery'>
    <h2>Grocery List</h2>
    <List items={list} />
  </div>
);

// Declaring one by one
// Neat but inefficient
var HalfGallonWholeMilk = () => (
  <li>Half Gallon of Whole Milk</li>
);

var ChocolateCereal = () => (
  <li>Chocolate Cereal</li>
);

// do not need to use # for getElementById
ReactDOM.render(<GroceryList />, document.getElementById('app'));