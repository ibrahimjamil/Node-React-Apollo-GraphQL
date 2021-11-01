import React, { useState } from "react";
import { CREATE_USER_MUTATION , SINGLE_UPLOAD} from "./GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file,setFile] = useState('')
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [singleUpload] = useMutation(SINGLE_UPLOAD)

  const addUser = async () => {
    await createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    await singleUpload({
      variables: {
        file
      }
    })
  };

  const onChange =(e)=>{
    setFile(e.target.files[0])
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input type="file" required onChange={onChange} />
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;