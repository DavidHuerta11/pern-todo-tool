import React, { useState, useEffect } from 'react'

function TimeStamp({date}) {  
    let localDate = String(new Date(date));
    localDate = localDate.slice(0, localDate.length - localDate.indexOf("(") + 1);
    
    return (
        <>
            <td style={{color: "white"}}>
                {localDate}
            </td>
        </>
    )
}

export default TimeStamp
