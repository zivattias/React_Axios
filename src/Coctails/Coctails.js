import axios from "axios"
import { useEffect, useState } from "react"
import CoctailsByLetter from "./CoctailsByLetter"

const COCTAILS_URL = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'



// export default function Coctails(props) {

//     const [coctails, setCoctails] = useState([])

//     if (coctails.length === 0) {
//         axios.get(COCTAILS_URL)
//         .then((response) => {
//             console.log(response)
//             setCoctails(response.data.drinks)
//         })
//     }

//     return(
//         <>
//         {coctails.length > 0 &&
//             <p>{coctails[0].strInstructions}</p>
//         }
//         </>
//     )
// }



// export default function Coctails(props) {

//     const[coctails, setCoctails] = useState([])

//     useEffect(
//         () => {
//             axios.get(COCTAILS_URL)
//             .then((response) => {
//                 console.log(response)
//                 setCoctails(response.data)
//             })
//         }, []
//     )


//     return(
//         <>
//         {coctails.length > 0 &&
//             <p>{coctails.drinks[0].strInstructions}</p>
//         }
//         </>
//     )
// }



export default function Coctails(props) {

    console.log('rendering Coctails')

    const [letter, setLetter] = useState('')
    const [submittedLetter, setSubmittedLetter] = useState(false)

    return(
        <>
        <form onSubmit={(event) => {
            event.preventDefault()
            setSubmittedLetter(letter)
            }}>
            <input type='text' value={letter} 
            onChange={(event) => setLetter(event.target.value)}/>
        </form>

        {submittedLetter &&
            <CoctailsByLetter letter={submittedLetter}/>
        }

        </>
    )
}