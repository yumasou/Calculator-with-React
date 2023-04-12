const Inputfield= props=>{
    return(
        <div className="col-lg-4 d-flex mx-auto">
            <input type="text" value={props.data} className="textfield" disabled />
        </div>
    )
}
export default Inputfield