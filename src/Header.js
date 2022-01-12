import { useContext } from 'react'
import { SearchContext } from './App'
import './css/Header.css'

export default function Header(props) {

    const searchValue = useContext(SearchContext)

    return (
        <div id='header'>
            <span id='H1'>Countries</span>
            <input type="search"
                placeholder='Search Country By Name'
                onChange={e => searchValue(e.target.value)} />
            <span> ({props.length})</span>
        </div>
    )
}