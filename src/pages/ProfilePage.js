import { useParams } from "react-router";

export default function ProfilePage(props){
    const params = useParams();
    //console.log(username);
    return(
        <h1>Profile Page: {params.username}</h1>
    );
}