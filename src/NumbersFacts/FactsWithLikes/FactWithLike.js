import { IconButton, Stack } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function FactWithLike(props) {

    console.log("Rendering Fact with props:", props)

    return(
        <Stack direction="row" spacing={2} alignItems='center'>
            <p style={{margin: 0}}>{props.factText}</p>
            <IconButton 
                color="primary" variant="outlined"
                onClick={() => props.onLikedNumber(Number(props.factText.split(' ')[0]))}
                disabled={props.likeAccess}>
                <ThumbUpAltIcon />
            </IconButton>
        </Stack>
    )
}