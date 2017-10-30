import React, {Component} from 'react'

import './style.css'

export default class Phone360 extends Component {
	render() {
		return (
			<div class="phone360">
				<div class="phone360_title">Наклоняй телефон,<br/> чтобы управлять<br/> прицелом</div>
				<div class="phone360_aria">
					<div class="phone360_icon">
						<div class="front"></div>
						<div class="back"></div>
					</div>
				</div>
			</div>
		)
	}
}
