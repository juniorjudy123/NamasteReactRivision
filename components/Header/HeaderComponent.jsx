import "./headerComponent.css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const HeaderComponent = () => {
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
				</ul>
			</div>
		</div>
	)
}

export default HeaderComponent
