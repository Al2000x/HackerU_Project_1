import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { nextPage, previousPage } from '../features/games/page-slice';

const Pages = () => {
  const dispatch=useDispatch();
  const PageSlice = useSelector((state) => state.page);
  console.log()
  return (
    <div>
        <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item"  onClick={()=>{
       if(PageSlice.pNum>1){
         dispatch(previousPage())
       }
      }}>
      <a className="page-link" href="#">Previous</a>
    </li>
    <h5 className='m-1'>page: {PageSlice.pNum}</h5>
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

export default Pages