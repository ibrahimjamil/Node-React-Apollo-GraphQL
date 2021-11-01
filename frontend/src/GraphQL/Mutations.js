
import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
    }
  }
`;

export const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!){
    singleUpload(file: $file){
      filename
      mimetype
      encoding
    }
  }
`;