import React, { useEffect }from 'react'
import { useSearchQuary} from '../app/custom_hooks/useSearchQuary'
import { useSelector } from 'react-redux'
import '../css_work/item.css'

const SearchedGames = ({Quary}) => {
  useEffect(() => {
  }, [])
    const [searchQuary] = useSearchQuary(Quary)
    if(searchQuary)
      console.log(searchQuary)
    else 
      console.log('err')  
    return null
}
export default SearchedGames