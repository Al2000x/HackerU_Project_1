import {   actionGenre,
    advenrtureGenre,
    fightingGenre,
    shooterGenre,
    casualGenre,
    puzzleGenre,
    racingGenre, } from "./category-slice";
// just made an array here for cleanliness 
export const dropdownItemsArray=[{

    navCategory:"action",
    action:actionGenre
},
{

    navCategory:"racing",
    action:racingGenre
},{

    navCategory:"shooter",
    action:shooterGenre
},{

    navCategory:"casual",
    action:casualGenre
},{

    navCategory:"fighting",
    action:fightingGenre
},{

    navCategory:"adventure",
    action:advenrtureGenre
},
{

    navCategory:"puzzle",
    action:puzzleGenre
},
]