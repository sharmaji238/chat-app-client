import React from 'react'

const AppLayout = () => WrappedComponent => {
    return (props)=>(
        <>
            <Title title="Chattu | Chat App" description="New generation Chat App"/>
            <header>App Layout Header</header>
            {WrappedComponent && (<WrappedComponent {...props}/>)}
            <footer>
                <p>App Layout Footer</p>
            </footer>
        </>
    )
}

export default AppLayout