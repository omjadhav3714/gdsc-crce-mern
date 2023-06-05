import React from 'react'

export default function CustomForm({ handleChange, handleSubmit, values, setValues }) {
    const { title, description } = values;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    className='form-control'
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Description</label>
                <input
                    type="text"
                    name="description"
                    className='form-control'
                    value={description}
                    onChange={handleChange}
                />
            </div>
            <div className="forn-group">
                <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
        </form>
    )
}
