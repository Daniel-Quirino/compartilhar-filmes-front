import React, { useState } from "react"
import Heart from "react-heart"
import Tooltip from '@material-ui/core/Tooltip';


function LikeButton(props) {
	const [active, setActive] = useState(props.likes)

	return (
		<Tooltip title="Like" placement="bottom">
			<div style={{ width: "2rem"}}>
				<Heart inactiveColor='black' isActive={active} onClick={() => setActive(!active)}/>		
			</div>
		</Tooltip>
	);
}

export default LikeButton;