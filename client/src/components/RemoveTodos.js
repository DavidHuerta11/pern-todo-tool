import React, { Fragment } from 'react'

function RemoveTodos() {
    
    /// delete all todos function
    const deleteAllTodos = async () => {
        try {
            const deleteAllTodos = await fetch(`/todos`, {
                method: "DELETE"
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button 
                    className="btn btn-dark"
                    onClick={() => deleteAllTodos()}>Delete All</button>
                </td>
            </tr>                    
        </Fragment>
    )
}

export default RemoveTodos
