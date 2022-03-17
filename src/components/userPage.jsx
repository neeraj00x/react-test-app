import React from "react";
import useFetch from "./useFetch";
import Map from "./map";
import UserInfo from "./userInfo";


function UserPage() {

    const [data] = useFetch("https://randomuser.me/api/");

    if (!data) return <div className="UserPage">
        <h1>Please wait some time...</h1> </div>;

    return (
        <div className="UserPage">
            {data &&
                data.results.map((item) => (
                    <Map item = {item}/>
                ))
            }
            {data &&
                data.results.map((item) => (
                    <UserInfo item = {item}/>
                ))
            }
        </div>
    );
}

export default UserPage;
