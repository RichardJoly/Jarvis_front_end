import React from 'react';

function Updater(){
    return (
        <div className="Updater">
            <button className="button" onClick={update_database}>Update database</button>
            <button className="button" onClick={update_frontend}>Update frontend</button>
            <button className="button" onClick={update_backend}>Update backend</button>
        </div>
    );
};

function update_database() {
    console.log("update_database");
};

function update_frontend() {
    console.log("update_frontend");
};

function update_backend() {
    console.log("update_backend");
};

export default Updater;