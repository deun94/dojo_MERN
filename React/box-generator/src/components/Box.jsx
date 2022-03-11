import React, {useState} from "react";
// import "./Box.css";

const Box = (props) =>{
    //===============================box properties setter
    // const [boxColor, setBoxColor] = useState("")
    //========================taking care of multiple properties
    const [boxInfo, setBoxInfo] = useState({
        boxColor: "",
        size : null
        })
    const[listOfBox, setListOfBox] = useState([]);
    //=============================functions
    //=======================handler
    const boxHandler = (e) =>{
        setBoxInfo({
            ...boxInfo,
            [e.target.name]: e.target.value
        })
    }
    //==============================creating box
    const createBox =(e) =>{
        e.preventDefault();
        const boxObj = {boxInfo}
        console.log("new box!", boxObj)

        //=====================creating list of box
        setListOfBox([...listOfBox, boxObj])
        setBoxInfo({
            boxColor: "",
            size : null
        });
    }
    return (
        <>
        <h1>Box Generator</h1>
        <div style={{width: "50%"}} className="container">
            <form onSubmit ={createBox}>
                <div>
                    <label className="m-3">Color:</label>
                    <input style = {{borderRadius: "5px", backgroundColor: "#D3D3D3"}}type="text" onChange = {boxHandler} name = "boxColor"value = {boxInfo.boxColor}></input>
                </div>
                <div>
                    <label className="m-3">Size:</label>
                    <input style = {{borderRadius: "5px", backgroundColor: "#D3D3D3"}}type="text" onChange = {boxHandler} name = "size"value = {boxInfo.size}></input>
                </div>
                

                <button style={{borderRadius: "5px", border:"3px #D3D3D3 solid"}}type="submit" className="btn m-3">Add</button>
            </form>
            <div className="boxDisplay">
            {
                //====box represents each item in the list
                listOfBox.map((box)=>{
                    return(
                        <div className="d-inline-flex m-3 flex-wrap" style={{border:"1px solid black", backgroundColor: box.boxInfo.boxColor, width: box.boxInfo.size+"px", height: box.boxInfo.size+"px"}}>{box.boxInfo.boxColor}</div>
                    )
                })
            }
            </div>
            
        </div>
        </>
    )
}

export default Box