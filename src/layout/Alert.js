import React, { useContext } from 'react';
import AlertContext from './../context/Alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return (
        alert !== null && (
            <div role='alert' className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i><p>{alert.msg}</p>
            </div>
        )
    )
}

export default Alert