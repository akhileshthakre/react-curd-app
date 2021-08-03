import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { Table , Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Read = () => {

    const [APIDate, setAPIData] = useState([])

    const setData = (data) => {
        let {id,firstName,lastName,checkBox} = data
        localStorage.setItem('ID',id)
        localStorage.setItem('FirstName', firstName)
        localStorage.setItem('LastName',lastName)
        localStorage.setItem('CheckBox',checkBox)
    }

    const onDelete = (id) => {
        axios.delete(`https://6108ec55d71b670017639634.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData()
        })
    }

    const getData = () => {
        axios.get(`https://6108ec55d71b670017639634.mockapi.io/fakeData`).then((getData) => {
            setAPIData(getData.data)
        })
    }

    
    useEffect(() => {
        axios.get(`https://6108ec55d71b670017639634.mockapi.io/fakeData`).then((response) => {
            setAPIData(response.data)
        })
    },[])


    return(

    <Table celled>
      <Table.Row>
        <Table.HeaderCell>FirstName</Table.HeaderCell>
        <Table.HeaderCell>LastName</Table.HeaderCell>
        <Table.HeaderCell>Checkbox</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    <Table.Body>
    {APIDate.map((data,id) => {
        return(
      <Table.Row>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
        <Table.Cell>{data.checkBox ? 'Checked' : 'Unchecked'}</Table.Cell>
        <Link to='./update'><Table.Cell><Button onClick={setData(data)}>Update</Button></Table.Cell></Link>
        <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
      </Table.Row>
    )})}
    </Table.Body>

  </Table>
)
    }

export default Read