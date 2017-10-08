import React from 'react'
import Switch from 'rc-switch';


let IphoneSel = ({ onChange, check, className }) => {

    return (
        <div className="iphonesel">
            <Switch
                onChange={onChange}
                checked={check}
            />
        </div>
    )
}

export default IphoneSel
