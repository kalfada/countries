import './css/Country.css'

export default function Country(props) {
    const { capital, continents, name, flags } = props
    return (
        <div id='country'>
            <div className='img' style={{ backgroundImage: `url(${flags.svg})` }}></div>
            <div className='country_text'>
                <span className='countryName'>{name.common}</span>
                <span> - </span>
                <span className='capital'>{capital}</span>
                <div className='continents'>{continents}</div>
            </div>
        </div>
    )
}