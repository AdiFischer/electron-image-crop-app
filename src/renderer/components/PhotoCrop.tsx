import { Link } from "react-router-dom"
export default function PhotoCrop() {
    return(
        <>
        <h1>Please choose photo to crop</h1>
        <input type="text" accept="image/*" />
        <Link to="/"> :&lt back</Link>
        </>
    )
}