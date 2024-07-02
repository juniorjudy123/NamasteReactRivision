import { useState } from "react"
import "./headerComponent.css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const HeaderComponent = () => {
	const [btnName, setbtnName] = useState(true)
	const handleBtnToggle = () => {
		setbtnName(!btnName)
	}
	console.log("header rendered")

	return (
		<div className="Header">
			<div className="Logo-container">
				<img
					className="Logo"
					src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg"
					alt="logo"
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact Us</li>
					<li>
						<ShoppingCartIcon />
					</li>
					<li>
						<button
							className="login-btn"
							onClick={() => {
								handleBtnToggle()
							}}
						>
							{btnName ? "Login" : "Logout"}
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderComponent
