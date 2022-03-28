import React from "react";
import {useParams} from "react-router";

const Home = () =>{

    const {stringOrNum, textColor, backgroundColor} = useParams();
    return(
        <>
            <div>
                {
                    (!stringOrNum)
                    ?<p>Welcome</p>
                    :(!isNaN(stringOrNum))
                        ?<h3>The number is: {stringOrNum}</h3>
                        //if textcolor or background color parameters are present
                        :(textColor || backgroundColor)
                            ?<h3 style = {{color: `${textColor}`, backgroundColor:`${backgroundColor}`, border:"10px solid black"}} className = "mt-5">The word is: {stringOrNum}</h3>
                            :<h3>The word is: {stringOrNum}</h3>
                }
            </div>

        </>
    )
}

export default Home;