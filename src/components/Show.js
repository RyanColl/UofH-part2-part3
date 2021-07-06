
const Show = (props) => {
    const eventHandler = (e) => {
        e.preventDefault()
        props.filterhandler(props.data.name)
    }
    return (
        <li>
            {props.data.name} <button onClick={eventHandler}> show</button>
        </li>
        
    )
}
export default Show