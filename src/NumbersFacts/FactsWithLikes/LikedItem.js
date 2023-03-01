import { Chip } from "@mui/material";

export default function LikedItem(props) {
    return(
        // <Chip label={props.number} color="primary" variant="outlined"/>
        <Chip label={props.number} color="primary" variant={props.number == 687 ? "contained": "outlined"}/>
    )
}