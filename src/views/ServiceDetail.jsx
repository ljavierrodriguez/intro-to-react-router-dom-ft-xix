import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ServiceDetail = () => {
    const params = useParams()

    const navigate = useNavigate();

    return (
        <div className="container">
            <h3 className="text-primary">Services {params?.id}</h3>
            <button className="btn btn-warning btn-sm" onClick={() => navigate('/services')}>Regresar</button>
        </div>
    )
}

export default ServiceDetail