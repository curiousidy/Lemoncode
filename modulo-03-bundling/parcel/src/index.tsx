// import "./mystyles.scss";
// const numberA: number = 1;
// const numberB: number = 2;

// console.log('result:', numberA + numberB);

import React from "react";
import {createRoot} from "react-dom/client";
import {Hello} from "./hello";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <Hello/>
    </div>
);