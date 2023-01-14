import React, { useState } from 'react'
import TopnavBar from './TopnavBar'

const Form = () => {
    const [payload,setPayload] = useState(
        {
            id:0,
            userId:0,
            title:"",
            completed:false
        });
        
    const handleSubmit = () => {



    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setPayload({...payload,[e.target.name]:e.target.value})
        console.log(payload)
    }


    return (
        <div className="container">
            <TopnavBar />
            <div className="row">
                <div className="container">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                <h3>Please Enter Your ToDo</h3>
                            </label>
                            <input type="text" name='id' className="form-control" placeholder='Enter Id' onChange={handleChange} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <input type="text" name='userId' className="form-control" placeholder='Enter User Id' onChange={handleChange} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <input type="text" name='title' className="form-control" placeholder='Enter title' onChange={handleChange} />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={handleSubmit}>Fill Task</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3>My ToDo List</h3>
                    <table className='tableborder'>
                        <thead className='tableborder'>
                            <tr className='tableborder'>
                                <th scope="col">USER ID</th>
                                <th scope="col">ID</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">COMPLETED</th>
                            </tr>
                        </thead>
                        <tbody className='tableborder'>

                            
                               <tr className='tableborder'>
                                    <td>{payload.userId}</td>
                                    <td>{payload.id}</td>
                                    <td>{payload.title}</td>
                                    <td><input type="checkbox" name="" id="" checked={payload.completed} /></td>
                      
                                    </tr>
                                
                        
                        </tbody>
                    </table>
                </div>

            </div>
        </div>


        </div>
    )
}

export default Form