import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [search_item, setsearch_item] = useState("")
    const navigate = useNavigate();

    const search_handle = () => {

        navigate("/?keyword=" + search_item)


    }

    return (
        <div className="col-12 col-md-6 mt-2 mt-md-0 border  two p-2 rounded-3 sha">
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control rounded"
                    placeholder="Enter Product Name ..."
                    onChange={(e) => setsearch_item(e.target.value)}
                    
                />
                <div className="input-group-append ">
                    <button onClick={search_handle} id="search_btn" className="btn">
                        <i className="bi bi-search text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search