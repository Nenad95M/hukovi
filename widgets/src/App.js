import React from "react";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// import Accordion from "./components/Accordion";

const items = [
    { title: "What is React?", content: "React is front end and javascript framework" },
    { title: "Why use React?", content: "React is favorite JS library among engineers" },
    { title: "How do you use React?", content: "You use React by creating components" }
]
const options = [
    {
        label: "The color red",
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    { label: "The color blue", value: 'blue' }
]
export default () => {
    return (<div>
        {/* <Search /> */}
        <Dropdown options={options} />
        {/* <Accordion items={items}/> */}
    </div>);
}; 