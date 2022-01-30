interface Props{
    text: string
    url?: string
    classes?: string | undefined
    onClick?: (pramerter:any) => void
}

const Button = (props: Props) => {

    const {text, classes , onClick, url  } = props

    const baseVoxUrl = "https://ksa.voxcinemas.com";

    const bookTicket = () => {
        window.open(baseVoxUrl + url)
    }

    return(
        <button onClick={onClick ?? bookTicket} className={`btn ${classes}`}>{ text }</button>
    )
}

export default Button