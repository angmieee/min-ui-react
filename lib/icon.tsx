import React from "react";
import classes from "../lib/helpers/classes";
import "./importIcons.js";
import "./style.scss";


interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props
    return ( 
        <svg 
            className={classes('min-icon', className)}
            {...restProps}
            
            >
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export default Icon