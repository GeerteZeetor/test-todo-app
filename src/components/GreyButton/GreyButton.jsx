export const GreyButton = ({onClick, children}) => {
    return (
        <button className="btn btn-secondary mt-4 float-right ml-2" onClick={onClick}>{children}</button>
    )
}
