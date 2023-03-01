import { Box, Button, LinearProgress, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Fact from "./Fact";

export default function NumbersFacts(props) {

    console.log("Rendering NumbersFacts with props", props)

    const [currFactText, setCurrFactText] = useState(null)
    const [loading, setLoading] = useState(false)


    const getFact = () => {
        setLoading(true)
        axios.get('http://numbersapi.com/random/math')
        .then((responseData) => {
            console.log('Received a new fact:', responseData)
            setLoading(false)
            setCurrFactText(responseData.data)
        })
    }

    return(
        <Box
            sx={{
                width: '50%',
                margin: 'auto',
                marginTop: '1em'
            }}
        >

            <h5 align="center">
                Welcome to Numbers Facts!
            </h5>


            <Stack spacing={2} marginY='2rem'>
                <Button variant="contained" onClick={getFact}>GET INTERESTING FACT!</Button>
            </Stack>

            {loading &&
                <LinearProgress />
            }

            {! loading && currFactText &&
                <Fact factText={currFactText}/>
            }
        </Box>
    )
}