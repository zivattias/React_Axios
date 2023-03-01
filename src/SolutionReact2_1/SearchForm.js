import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import {IMG_DATA} from "./imgsData.js"
import SearchImg from "./SearchImg";


export default function SearchForm(props) {

    console.log("Rendering SearchForm")

    const [searchText, setSearchText] = useState("")
    const [currImgUrl, setCurrImgUrl] = useState(null)

    const handleTextSubmit = (event) => {

        event.preventDefault()
        console.log(IMG_DATA)

        if (searchText.toLowerCase() in IMG_DATA) {
            console.log(IMG_DATA.searchText)
            setCurrImgUrl(IMG_DATA[searchText])
        } else {
            setCurrImgUrl('NOT_FOUND')
        }
    }

    let elem = null
    if (currImgUrl === 'NOT_FOUND') {
        elem = <p>Image does not exist</p>
    } else if (currImgUrl === null) {
        elem = null
    } else {
        elem = <SearchImg imgUrl={currImgUrl}/>
    }
    
    return(
        <Stack gap={5} className="col-md-5 mx-auto">
            <Form className="col-md-5 mx-auto" onSubmit={handleTextSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Search for image:</Form.Label>
                    {/* Controlled component */}
                    <Form.Control 
                        type="text" 
                        placeholder="Insert your text here"
                        value={searchText}
                        onChange = {
                            (event) => {setSearchText(event.target.value)}}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Show</Button>
            </Form>

            {/* {currImgUrl &&
                <SearchImg imgUrl={currImgUrl}/>
            } */}

            {/* {currImgUrl === 'NOT_FOUND'
            ? 
                <p>No image detected</p>
            :
                currImgUrl === null
                ?
                    null
                :
                    <SearchImg imgUrl={currImgUrl}/>
            } */}

            {elem}
        </Stack>
    )

}