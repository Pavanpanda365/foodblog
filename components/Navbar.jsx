import '../styles/navbar.css'
const Navbar = () => {
	return (  
		<div className="navbar">
				<div className="logo">
					<a>Stories<span>.</span></a>
				</div>
				<div className="links">
					<a href="/home">Home</a>
					<a href="/about">About</a>
					<a href="">Food</a>
					<a href="">Lifestyle</a>
					<a href="">Contact</a>
				</div>
			</div>
	);
}
 
export default Navbar;