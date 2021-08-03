import axios from 'axios'
import React,{ useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router'



const Create = () => {

  const [firstName,setFirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [checkBox,setcheckBox] = useState(false)

  let history = useHistory()

  const postData = () => {
    axios.post(`https://6108ec55d71b670017639634.mockapi.io/fakeData`,{
      firstName,
      lastName,
      checkBox
    }).then(() => {
      history.push('/read')
    })
  }

  return(
  <Form className="create-form">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e) =>setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e) => setlastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setcheckBox(!checkBox)} />
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
  )
}

export default Create