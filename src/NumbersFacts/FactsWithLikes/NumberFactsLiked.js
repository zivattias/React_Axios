import { Box, Button, LinearProgress, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import DisplayedFactOnClick from "./DisplayedFactOnClick";
import FactWithLike from "./FactWithLike";

import LikedList from "./LikedList";

export default function NumbersFactsLiked(props) {
    console.log("Rendering NumbersFactsLiked with props", props);

    const [factData, setFactData] = useState({
        text: null,
        loading: false,
    });
    const [likedNumbers, setLikedNumbers] = useState({});
    const [numberExists, setNumberExists] = useState(false);
    const [selectedChip, setSelectedChip] = useState({});
    const [display, setDisplay] = useState(false);

    const getFact = () => {
        // set loading to true
        // important to update the whole objects, not parts of it!
        // DON'T DO THIS:
        // factData.loading = true
        // or this:
        // setFactData({loading: true})
        setFactData({ ...factData, loading: true });

        axios.get("http://numbersapi.com/random/math").then((responseData) => {
            console.log("Received a new fact:", responseData);
            setNumberExists(false);
            setFactData({
                text: responseData.data,
                loading: false,
            });
        });
    };

    const handleLikedNumber = (number) => {
        // updating an array - need to create a copy and add anew element to it
        // make sure not to mutate the array, but to copy one!
        setNumberExists(true);
        setLikedNumbers({ ...likedNumbers, [number]: factData.text });
        console.log(likedNumbers);
    };

    const handleDeleteNumber = (number) => {
        delete likedNumbers[number];
        setLikedNumbers({ ...likedNumbers });
        if (number === factData.text.split(" ")[0]) {
            setNumberExists(false);
        }
    };

    const handleSelectedChip = (number, fact) => {
        console.log("number", number);
        console.log("selectedChip.number", selectedChip.number);
        if (number === selectedChip.number) {
            setDisplay(!display);
        } else {
            setSelectedChip({ number: number, fact: fact });
            setDisplay(true);
        }
    };

    return (
        <Box
            sx={{
                width: "50%",
                margin: "auto",
                marginTop: "1em",
            }}
        >
            <h5 align="center">Welcome to Numbers Facts!</h5>

            <Stack spacing={2} marginY="2rem">
                <Button variant="contained" onClick={getFact}>
                    GET INTERESTING FACT!
                </Button>
            </Stack>

            {/* {factData.loading &&
                <LinearProgress />
            } */}
            {/* <LinearProgress style ={{visibility: factData.loading ? 'visible' : 'hidden' }}/> */}
            <LinearProgress hidden={!factData.loading} />

            {factData.text && (
                <FactWithLike
                    factText={factData.text}
                    onLikedNumber={handleLikedNumber}
                    likeAccess={numberExists}
                />
            )}

            {Object.keys(likedNumbers).length > 0 && (
                <Stack spacing={2} marginY="1em">
                    <hr />
                    <h5>Numbers you liked:</h5>
                    <LikedList
                        data={likedNumbers}
                        onDeleteChip={handleDeleteNumber}
                        onClickChip={handleSelectedChip}
                    />
                </Stack>
            )}
            {display && selectedChip.number in likedNumbers && (
                <DisplayedFactOnClick
                    fact={selectedChip.fact}
                ></DisplayedFactOnClick>
            )}
        </Box>
    );
}
