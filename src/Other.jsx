import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function Other() {
    return (
        <div>
          <Heading>Other page</Heading>
          <Link to="/">Home</Link>
        </div>
      )
}