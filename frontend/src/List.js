import React,{useState,useEffect} from 'react'
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from './GraphQL/Queries';


const List = () => {
    const { data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (data) {
          setUsers(data.getAllUsers);
        }
      }, [data]);
    return (
        <div>
            {users.map((val) => {
                return <h1> {val.firstName}</h1>;
             })}
        </div>
    )
}

export default List
