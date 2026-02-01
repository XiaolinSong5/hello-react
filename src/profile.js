import {useEffect, useState} from "react";

export default function Profile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const reponse = await fetch('http://localhost:3001/profile');
            const data = await reponse.json();
            console.log(data);
            setFirstName(data.firstName);
            setLastName(data.lastName);
        }
        fetchData();
    }, []);
    return <div>
    <div> <strong>First Name: {firstName}</strong></div>
    <div><strong>Last Name: {lastName}</strong></div>
    </div>
}
