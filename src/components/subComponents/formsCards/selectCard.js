import React from "react";

export const OptionCard = ({optionValue}) => {
    return(
        <option>{optionValue}</option>
    )
}

export const optionValue = {
    optionCategory : [
        {
            id: "1",
            name: "All"
        },
        {
            id: "2",
            name: "Agriculture"
        },
        {
            id: "3",
            name: "E-commerce"
        },
        {
            id: "4",
            name: "Health"
        },
    ],
    optionDate : [
        {
            id: "1",
            name: "Default",
        },
        {
            id: "2",
            name: "Ascending",
        },
        {
            id: "3",
            name: "Descending",
        },
    ],
    optionOrder : [
        {
            id : "1",
            name: "Default",
        },
        {
            id : "2",
            name: "Ascending",
        },
        {
            id : "3",
            name: "Descending",
        },
    ]

}