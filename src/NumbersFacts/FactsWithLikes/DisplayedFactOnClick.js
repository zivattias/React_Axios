import Typography from "@mui/material/Typography";

export default function DisplayedFactOnClick(props) {
    return <Typography paragraph={true}>{props.fact}</Typography>;
}
