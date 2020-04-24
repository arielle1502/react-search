//  the alert component pops up an alert message when the user submits an empty search
import React from 'react'

const Alert = ({alert}) => {
    return (
       alert !== null && (
           <div className={`alert alert-${alert.type}`}>
               <i className='fas fa-info-circle'/>{alert.msg}

           </div>
       )
    )
}
export default Alert