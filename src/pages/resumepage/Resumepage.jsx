import { useLocation } from "react-router";
import Resume from "../../components/resume/Resume";
import "./resumepage.css";

export default function ResumePage() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Resume />
        </>
    );
}
