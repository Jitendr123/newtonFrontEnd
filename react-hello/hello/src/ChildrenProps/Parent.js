function Parent(props){
    // console.log(props);
    const {children,name} =props
    // console.log(children);
    return(
        <>
            <div>
                I am Parent Component {name}
            </div>
            {children}
        </>
    )
}

export default Parent;