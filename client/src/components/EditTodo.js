import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import CustomForm from './Form';
import { useParams } from 'react-router-dom';

let intiatState = {
    title: '',
    description: '',
}
export default function EditTodo() {
    const [data, setData] = React.useState(intiatState);
    const {id} = useParams();

    const getSingleTodo = async () => {
        await axios.get(`http://localhost:8000/api/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getSingleTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/update/${id}`, data)
            .then((res) => {
                toast.success('Todo Updated Successfully')
            });
    }

    return (
        <div>
            <h3>Update Todo</h3>
            <CustomForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={data}
                setValues={setData} />
        </div>
    )
}
