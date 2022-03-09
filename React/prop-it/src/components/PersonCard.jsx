import React, {Component} from "react"; //import react and component so we can have those to create class based on component

//name of your file starts with Capital. must match the class
class PersonCard extends Component {
    //need render and build html
    
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
    //descructured
        return (
            //html here
            <div>
                <h4>{lastName}, {firstName}</h4>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )

    }
}

//now you can export
export default PersonCard;