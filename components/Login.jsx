import '../styles/login.css'
const Login = () => {
	return (
		<div className="main-containers">
			<div className="image-form">
				<div className="logo">
					<img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="" />
					<a href="">create an account</a>
				</div>
				<div className="form">
					<h2>Sign Up</h2>
					<form>
						<input type="text" placeholder='Your Name' />
						<input type="password" placeholder='Password' />
						<div className="check">
							<input type="checkbox" />
							<span>Remember me</span>
						</div>
						<input type="submit" value="Log in" />
					</form>
					<div className="logins">
						<span> Or login with</span>
						<i class='bx bxl-facebook-square'  ></i>
						<i class='bx bxl-twitter' ></i>
						<i class='bx bxl-google'></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;