
interface Props {
    options: string[]
}

const Select = (props: Props) => {
    return (
        <select className="form-select">
            <option> Another City... </option>
            {
                props.options.length !== 0 
                ?
                props.options.map((option, index) => {
                    return (
                        <>
                            <option key={index}> {option} </option>
                        </>
                    )
                })
                :
                <option> No Data </option>
            }
        </select>
    )
}

export default Select