import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

export default function TodoList() {
    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        await axios.get('http://localhost:8000/api/all')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        fetchData();
    }, [data]);

    return (
        <div>
            <h3>Todo List</h3>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr key={index}>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td><Link to={`/edit/${data._id}`}>Edit</Link> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
