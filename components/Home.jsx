import '../styles/home.css'
import Navbar from './Navbar';
const Home = () => {
	return (
		<div className="main-container">
			{/* <div className="navbar">
				<div className="logo">
					<a>Stories<span>.</span></a>
				</div>
				<div className="links">
					<a href="">Home</a>
					<a href="/about">About</a>
					<a href="">Food</a>
					<a href="">Lifestyle</a>
					<a href="">Contact</a>
				</div>
			</div> */}
			<Navbar />
			<div className="sec-1">
				<div className="img">

				</div>
				<div className="content-btn">
					<div className="content">
						<div className="extra">
							<span>FEATURED POSTS</span>
							<h1>I am A Blogger & I Love Foods </h1>
							<hr />
							<p>
								A small river named Duden flows by their place and suplies it with the necessary regelialia
							</p>
							<a>Read More<i className='i' class='bx bx-left-arrow-alt bx-rotate-180' ></i></a>
						</div>
						<div className="buttons">
							<button>
								<i class='bx bx-left-arrow-alt'></i>FORWORD
							</button>
							<button>
								NEXT<i class='bx bx-left-arrow-alt bx-rotate-180' ></i>
							</button>
						</div>
					</div>
				</div>

			</div>
			<div className="sec-2">
				<h3>Recent Stories.</h3>

			</div>
		</div>
	);
}

export default Home;