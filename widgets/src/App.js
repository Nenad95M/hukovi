import React from "react";
import Search from "./components/Search";

// import Accordion from "./components/Accordion";

const items=[
    {title:"What is React?", content:"React is front end and javascript framework"},
    {title:"Why use React?", content:"React is favorite JS library among engineers"},
    {title:"How do you use React?", content:"You use React by creating components"}
]
export default ()=>{
    return(<div>
        <Search />
        {/* <Accordion items={items}/> */}
        </div>);
}; 