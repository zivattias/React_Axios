import { Stack } from "@mui/material";
import LikedItem from "./LikedItem";

export default function LikedList(props) {
    const items = Object.entries(props.data).map(([number, fact]) => (
        <LikedItem
            key={number}
            number={number}
            deleteItem={props.onDeleteChip}
            selectItem={props.onClickChip}
            fact={fact}
        />
    ));

    return (
        <>
            <Stack direction="row" spacing={1}>
                {items}
            </Stack>
        </>
    );
}
