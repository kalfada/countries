import './css/Country.css'

export default function Country(props) {
    const { capital, continents, name, flags } = props
    const flagImg = `url(${flags.svg})`
    return (
        <div id='country'>
            <div id='img' style={{backgroundImage:flagImg}}></div>
            <div>
                <span>{name.common}</span>
                <span> - </span>
                <span>{capital}</span>
                <div>{continents}</div>
            </div>
        </div>
    )
}