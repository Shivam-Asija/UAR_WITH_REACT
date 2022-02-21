import React from 'react';


export const PageComponent = ({children}) => {

    document.title = children.props.pageTitle;
    return (
        <>
        <div className={"pageContainer"} >
            {children}
        </div>
        </>
    )
}

export default PageComponent;