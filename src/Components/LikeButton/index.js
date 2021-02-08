import React, { useState } from "react"
import Heart from "react-heart"

function LikeButton(props) {
	const [active, setActive] = useState(props.likes)

	return (
		<div style={{ width: "2rem"}}>
			<Heart inactiveColor='white' isActive={active} onClick={() => setActive(!active)}/>
		</div>
	);
}

export default LikeButton;