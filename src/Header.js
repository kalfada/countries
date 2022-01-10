import './css/Header.css'

export default function Header(props) {
    

    return(
        <div id='header'>
            <span id='H1'>Countries</span>
            <span> ({props.length})</span>
        </div>
    )
}