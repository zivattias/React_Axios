import axios from "axios"
import { useEffect, useState } from "react"

// export default function CoctailsByLetter(props) {

//     console.log('rendering CoctailsByLetter')

//     const [coctails, setCoctails] = useState([])

//     // will not work when changing letter...
//     // there is a need to detect the change of props...
//     if (props.letter && coctails.length === 0) {
//         axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + props.letter)
//         .then((response) => {
//             console.log(response)
//             setCoctails(response.data.drinks)
//         })
//     }


//     return (
//         <>
//         <p>Now loading coctails for {props.letter}</p>
//         {props.letter && coctails.length > 0 &&
//             <p>{coctails[0].strInstructions}</p>
//         }
//         </>
//     )
// }



export default function CoctailsByLetter(props) {

    console.log('rendering CoctailsByLetter')

    const [coctails, setCoctails] = useState([])


    useEffect(
            () => {
            axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + props.letter)
            .then((response) => {
                console.log(response)
                setCoctails(response.data.drinks)
            })},
            [props.letter]
        )
        


    return (
        <>
        <p>Now loading coctails for {props.letter}</p>
        {props.letter && coctails.length > 0 &&
            <p>{coctails[0].strInstructions}</p>
        }
        </>
    )
}