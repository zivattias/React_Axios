import { Box, Button, LinearProgress, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Fact from "./Fact";

export default function NumbersFactsObj(props) {

    console.log("Rendering NumbersFactsObj with props", props)


    const [factData, setFactData] = useState({
        text: null,
        loading: false
    })


    const getFact = () => {
        
        // set loading to true
        // important to update the whole objects, not parts of it!
        // DON'T DO THIS:
        // factData.loading = true
        // or this:
        // setFactData({loading: true})
        setFactData({...factData, loading: true})
        
        axios.get('http://numbersapi.com/random/math')
        .then((responseData) => {
            console.log('Received a new fact:', responseData)


            setFactData({
                text: responseData.data,
                loading: false
            })
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

            {factData.loading &&
                <LinearProgress />
            }

            { !factData.loading && factData.text &&
                <Fact factText={factData.text}/>
            }
        </Box>
    )
}