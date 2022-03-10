import React, {Component} from "react"; //import react and component so we can have those to create class based on component

//name of your file starts with Capital. must match the class
class PersonCard extends Component {
    //can build anything js here
    //build constructor
    constructor(props){
        //inherit props
        super(props);
        //get a state object and give a key and value to it.
        this.state = {
            //create a state variable for the age so its not just in a props variable(which we were not allowed to update the value of
            age: this.props.age
        }
        //state updates updates the component instance

        this.itsYourBirthday = () => {
            // return this.props.age += 1; this doesn't work
            //props are read only
            // this.state.age ++ -->can't use this
            // alert(`You have increased the age of ${this.props.firstName}`);
            this.setState({age: this.state.age+1})//in order to update the state variable, we need to use this.setState(variable)
        }
        
        this.reset = () =>{
            alert("you are resetting the age");
            this.setState({age:this.props.age})
        }
    }
    
    //need render and build html
    
    render(){
        const {firstName, lastName, hairColor} = this.props;
    //descructured
        return (
            //jsx, its like html inside the javascript
            //empty jsx object to wrap around different divs(children)
            //so that we only have one parent returning
            <>
            <div>
                <h4>{lastName}, {firstName}</h4>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.itsYourBirthday}>Birthday Button</button>
                <button onClick={this.reset}>Reset</button>
                
            </div>
            <hr/>
            {/*horizontal line */}
            
            </>
        )
    }
    
}

//now you can export
export default PersonCard;