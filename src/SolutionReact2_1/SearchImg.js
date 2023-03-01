import { Image } from "react-bootstrap";

export default function SearchImg(props) {
    
    console.log("Rendering SearchImg", props)
    return <Image src={props.imgUrl} rounded fluid/>

}