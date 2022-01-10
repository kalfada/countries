import './css/Country.css'

export default function Country(props) {
    const { capital, continents, name, flags } = props
    const flagImg = `url(${flags.svg})`
    return (
        <div id='country'>
            <div id='img' style={{backgroundImage:flagImg}}></div>
            <div>
                <span className='countryName'>{name.common}</span>
                <span> - </span>
                <span className='capital'>{capital}</span>
                <div className='continents'>{continents}</div>
            </div>
        </div>
    )
}