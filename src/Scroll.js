import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{ overflowY : 'scroll', border: '1px solid linear-gradient(to left, rgba(7,27,82,1) 0%,rgba(0,128,128,1) 100%)', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;