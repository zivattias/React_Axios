import { Chip } from "@mui/material";

export default function LikedItem(props) {
    return (
        // <Chip label={props.number} color="primary" variant="outlined"/>
        <>
            <Chip
                label={props.number}
                color="primary"
                variant="outlined"
                onDelete={() => {
                    props.deleteItem(props.number);
                }}
                onClick={() => {
                    props.selectItem(props.number, props.fact);
                }}
            />
        </>
    );
}
