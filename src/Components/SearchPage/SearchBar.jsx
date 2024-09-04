import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc";
 
import './SearchBar.scss'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
    const [SearchQuerry, setSearchQuerry] = useState('')
    const [Page, setPage] = useState(1)
const Naviagte = useNavigate()


const handleSubmit =  (e) => {
    e.preventDefault();
    setPage(1)
    Naviagte(`search/${SearchQuerry}/page/${Page}`)
    
}


  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <input type="text"
            className='inputTag'
                required
                 value={SearchQuerry}
                onChange={(e) => setSearchQuerry(e.target.value) } 
                placeholder='Search Movies or Series.....'
                />

                <button className='SearchBtn' type='submit'> <FcSearch style={{fontSize:20}}/></button>
        </form>

         
      
    </div>
  )
}

export default SearchBar
