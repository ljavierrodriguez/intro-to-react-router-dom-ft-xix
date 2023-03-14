import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Services = () => {
    const params = useParams()

    return (
        <div className="container">
            <h3 className="text-primary">Services</h3>
            <div className="row">
                <div className="col-md-4">
                    <Link className="btn btn-primary btn-sm" to={"/services/"+1+"/"+"Moda"}>1</Link>
                </div>
                <div className="col-md-4">
                    <Link className="btn btn-primary btn-sm" to={"/services/"+2+"/"+"Tiendas"}>2</Link>
                </div>
                <div className="col-md-4">
                    <Link className="btn btn-primary btn-sm" to={"/services/"+3+"/"+"Ropa"}>3</Link>
                </div>
            </div>
        </div>
    )
}

export default Services