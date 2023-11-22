import { getContainerClasses } from "../Utils/Container"

type ContainerProps = React.PropsWithChildren & {
    className?: string,
    id?: string
}

export const Container: React.FC<ContainerProps> = props => {
    return <div
        id={props.id}
        className={ getContainerClasses( props.className ) }
    >
        {props.children}
    </div>
}