const Keylist = (props) => {
    const clickHandle=e=>{
      let val=e.target.innerText;
      let input=props.data;
        props.setdata(input + val
        )
    }
    const clear=()=>{
      props.setdata("")
    }
    const solve=()=>{
      props.setdata(props.eva(props.data))
    }
  return (
    <div className="col-lg-4 mx-auto mt-1">
      <div className="d-flex">
        <button className="btn btn-outline-primary" onClick={clickHandle}>9</button>
        <button className="btn btn-outline-primary" onClick={clickHandle}>8</button>
        <button className="btn btn-outline-primary" onClick={clickHandle}>7</button>
        <button className="btn btn-outline-primary" id="operator" onClick={clickHandle}>
          /
        </button>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-primary" onClick={clickHandle}>6</button>
        <button className="btn btn-outline-primary" onClick={clickHandle}>5</button>
        <button className="btn btn-outline-primary" onClick={clickHandle}>4</button>
        <button className="btn btn-outline-primary" id="operator" onClick={clickHandle}>
        *
        </button>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-primary" onClick={clickHandle}>3</button>
        <button className="btn btn-outline-primary" onClick={clickHandle}>2</button>
        <button className="btn btn-outline-primary" onClick={clickHandle}>1</button>
        <button className="btn btn-outline-primary" id="operator" onClick={clickHandle}>
          +
        </button>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-primary" onClick={clickHandle}>.</button>
        <button className="btn btn-outline-primary" onClick={clickHandle}>0</button>
        <button className="btn btn-outline-primary" onClick={solve}>=</button>
        <button className="btn btn-outline-primary" id="operator" onClick={clickHandle}>
          -
        </button>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-primary" id="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};
export default Keylist;
