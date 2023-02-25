import React from "react";

function Card({movieData}){
    const addToListData=(title)=>{
console.log(title);
    }
    return(
        <>
        {
            movieData?.map(item=>{
                return(
                    <>
                    <div className="poster">
                        <img src={item.Poster} />
                    </div>
                    <div className="card-title">
                    <h1>{item.Title} ({item.Year})</h1>
                    <button onClick={()=>{addToListData(item.Title)}}>add to list</button>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
export default Card;