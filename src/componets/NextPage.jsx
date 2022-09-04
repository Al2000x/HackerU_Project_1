import React from 'react'
import { useDispatch } from 'react-redux'
import { nextPage } from '../features/games/next-page-slice';

const NextPage = () => {
    const dispatch=useDispatch();
  return (
    <div>
        <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <span className="page-link">Previous</span>
    </li>
    <li className="page-item"onClick={()=>{
        dispatch(nextPage());
    }}>
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default NextPage