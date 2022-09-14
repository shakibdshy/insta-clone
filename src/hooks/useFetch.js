import { useEffect, useState } from "react";

function useFetch() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('insta.json')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, []);
    return [userData, setUserData];
}

export default useFetch