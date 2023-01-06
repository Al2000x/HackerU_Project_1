import React from 'react'

import { useDispatch,useSelector} from 'react-redux'
import { nextPage, previousPage } from '../features/games/page-slice';

const Pages = () => {
  const dispatch=useDispatch();
  const PageSlice = useSelector((state) => state.page);
  console.log()
  return (
    <div >
  <ul >
    <li className="page-item"  onClick={()=>{
       if(PageSlice.pNum>1){
         dispatch(previousPage())
       }
      }}>
      <a className="next-page-left pageToggle "><span className='symbolRight'>◁</span></a>
    </li>
    <h5 className='m-1 text-center'>page: {PageSlice.pNum}</h5>
    <li className="page-item"onClick={()=>{
        dispatch(nextPage());
    }}>
      <a className="pageToggle next-page" href="#"><span className='symbolLeft'>▷</span></a>
    </li>
  </ul>
    </div>
  )
}

export default Pages