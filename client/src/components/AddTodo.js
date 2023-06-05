import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import CustomForm from './Form';

let intiatState = {
    title: '',
    description: '',
}
export default function AddTodo() {
    const [data, setData] = React.useState(intiatState);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/add', data)
            .then((res) => {
                toast.success('Todo Added Successfully')
            });
    }

    return (
        <div>
            <h3>Add Todo</h3>
            <CustomForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={data}
                setValues={setData} />
        </div>
    )
}
