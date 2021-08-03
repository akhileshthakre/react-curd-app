import axios from 'axios'
import React,{ useState, useEffect } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router'

const Update = () => {

  const [firstName,setFirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [checkBox,setcheckBox] = useState(false)
  const [id,setId] = useState(null)

  useEffect(() => {
    setId(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('firstName'))
    setlastName(localStorage.getItem('lastName'))
    setcheckBox(localStorage.getItem('checkBox'))
  }, [])

  let history = useHistory()

  const updateAPIData = () => {
      axios.put(`https://6108ec55d71b670017639634.mockapi.io/fakeData/${id}`,{
          firstName,lastName,checkBox
      }).then(() => {
        history.push('/read')
      })
  }

  return(
  <Form className="create-form">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' value={firstName} onChange={(e) =>setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' value={lastName} onChange={(e) => setlastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' checked = {checkBox} onChange={(e) => setcheckBox(!checkBox)} />
    </Form.Field>
    <Button type='submit' onClick={updateAPIData}>Update</Button>
  </Form>
  )
}

export default Update