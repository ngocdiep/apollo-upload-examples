import { graphql, gql } from 'react-apollo'
import uploadsQuery from '../queries/uploads'

const MultipleUploader = ({ mutate }) => {
  const handleChange = ({ target }) => {
    if (target.validity.valid) {
      mutate({
        variables: {
          files: target.files
        },
        refetchQueries: [
          {
            query: uploadsQuery
          }
        ]
      })
    }
  }

  return <input type="file" multiple required onChange={handleChange} />
}

export default graphql(gql`
  mutation multipleUpload($files: [Upload!]!) {
    multipleUpload(files: $files) {
      id
      name
      type
      size
      path
    }
  }
`)(MultipleUploader)
