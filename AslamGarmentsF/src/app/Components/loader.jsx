import React from 'react';
import { PuffLoader } from 'react-spinners';

export default function Loader() {
    return (
        <div className="loader">
            <PuffLoader color='#0080ff' size={200}/>
        </div>
    );
}
