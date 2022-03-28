import React, {useState} from "react";
// import "./Box.css";

const Box = (props) =>{
    //===============================box properties setter
    // const [boxColor, setBoxColor] = useState("")
    //========================taking care of multiple properties
    const [boxInfo, setBoxInfo] = useState({
        boxColor: "",
        size : null,
        shape: ""
        })
    const[listOfBox, setListOfBox] = useState([]);
    //=============================functions
    //=======================handler
    const boxHandler = (e) =>{
        e.preventDefault();
        setBoxInfo({
            ...boxInfo,
            [e.target.name]: e.target.value
        })
    }
    //==============================creating box
    const createBox =(e) =>{
        e.preventDefault();
        //prevents reloading when the infos are changed
        const boxObj = boxInfo
        console.log("new box!", boxObj)

        //=====================creating list of box
        setListOfBox([...listOfBox, boxObj])
        setBoxInfo({
            boxColor: "",
            size : null,
            shape : ""
        });
    }

    // const shapeBox= (shape) =>{
    //     if(shape === "circle"){
    //         setBoxInfo.shape = "50%"
    //     }else{
    //         setBoxInfo.shape = ""
    //     }
    // }
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
                <div>
                    <label className="m-3">Shape:</label>
                    <div className="radio"  name = "shape">
                        <label className="m-3">Square:</label>
                        <input 
                            type="radio" 
                            onChange = {boxHandler}
                            // checked={boxInfo.shape ==="0"}
                            name = "shape"
                            value = "square"
                        ></input>
                        <label className="m-3">Circle:</label>
                        <input 
                            type="radio"
                            onChange = {boxHandler}
                            //checked = {boxInfo.shape ==="50%"}
                            name = "shape"
                            value = "circle"
                            ></input>
                    </div>
                </div>
                

                <button style={{borderRadius: "5px", border:"3px #D3D3D3 solid"}}type="submit" className="btn m-3">Add</button>
            </form>
            <div className="boxDisplay">
            {
                //====box represents each item in the list
                listOfBox.map((box)=>{
                    return(
                        <div className="d-inline-flex m-3 flex-wrap" style={{border:"1px solid black", backgroundColor: box.boxColor, width: box.size+"px", height: box.size+"px", borderRadius: box.shape ==="circle"? "50%":"0%"}}></div>
                    )
                })
            }
            </div>
            
        </div>
        </>
    )
}

export default Box