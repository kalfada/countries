import Country from './Country'

export default function List(props) {
    const { list } = props
    return (
        <ul>
            {list.map(c =>
                <Country
                key={c.cca2}
                {...c}
                refreshView={props.refreshView}/>
            )}
        </ul>
    )
}