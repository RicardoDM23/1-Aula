import { useState } from "react";

function MirrorText() {

    const [text, setText] = useState('');

    return (
        <div>
            <textarea
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <p>{text}</p>
        </div>
    )
}

export default MirrorText;