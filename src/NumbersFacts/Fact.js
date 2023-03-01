import { Button, IconButton, Stack } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function Fact(props) {

    console.log("Rendering Fact with props:", props)

    return(
        <Stack direction="row" spacing={2} alignItems='center'>
            <p style={{margin: 0}}>{props.factText}</p>
            <IconButton>
                <ThumbUpAltIcon />
            </IconButton>
        </Stack>
    )
}