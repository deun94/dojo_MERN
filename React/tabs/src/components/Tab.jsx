import React, {useState} from "react";

const Tab = (props)=>{
    const[header, setHeader] = useState("");
    const[content, setContent] = useState("");
    const[tabList, setTabList] = useState([]);

    const[]

    const onClickHandler = (idx) =>{
        e.preventDefault();
        alert(idx)

    }
    return (
        <>
        <div className="container" style={{width: "700px"}}>
            <h1>Switch Tabs to See the content!</h1>
            <div className="navBar d-flex justify-content-around" style={{width: "40%"}}>
                {/* <div 
                    style = {{border:"2px solid black" , width: "30%"}}
                    onClick = {onClickHandler}
                    className="tab">
                    Tab 1
                </div>
                <div 
                    style = {{border:"2px solid black" , width: "30%"}}
                    onClick = {onClickHandler}
                    className="tab">
                    Tab 2
                </div>
                <div 
                    style = {{border:"2px solid black" , width: "30%"}}
                    onClick = {onClickHandler}
                    className="tab">
                    Tab 3
                </div> */}
            </div>
            <div className="card">
                {
                    tabList.map((tab, i) =>
                            <p key ={i}>{tab}</p>
                    )
                }
            </div>
        </div>
        
        
        </>
    )
}

export default Tab