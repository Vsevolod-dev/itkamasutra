import React from "react";

const Lazy = Element => {
    return props => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Element {...props}/>
        </React.Suspense>
    }
}
export default Lazy