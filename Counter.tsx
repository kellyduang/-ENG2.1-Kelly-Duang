import React from 'react'

interface CounterProps{
    message:string
}
interface CounterState{
    count:number
}
class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props:CounterProps){ //NOTE: this method is called when the Counter is first created; often used to intialize state
    super(props)
    this.state = {count:0} //CONFIRM: You can set a different initial value for the count and have it display in the browser 
  }

  componentWillMount(){ //NOTE: this method is called before the component is displayed
    //this.setState({count:3}); //CONFIRM: State can be changed using setState by uncommenting this line
  }

  render() {
    return (
      <div className="Hearts" onClick={() => this.increment()}>
        {this.props.message} {this.state.count}
      </div>
    );
    //this.props.message = "Way to go!" //CONFIRM: Properties CAN'T be changed; uncommenting this line causes an error
  }
  //TODO: Finish the increment function to set a new state object with the incremented count 
  private increment = () => {
    this.setState(
        state => ({/* HINT: this will be the new state object */})
      );
   };
}

export default Counter