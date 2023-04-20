import '../styles/addpost.css'
const Addpost = () => {
	return (
		<div className="addpost">
			<div className="image">
				<img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="" />
			</div>
			<div className="addpost-form">
				<p>ADD POST</p>
				<div>
					Author<input type="text" placeholder="Author" />
				</div>
				<div>
					Title<input type="text" placeholder="title of the post" />
				</div>
				<div>
					Summary <input type="text" className='summary' placeholder="summary of the post" /> 
				</div>
				<div>
					Image <input type="image" src="" alt="" placeholder='image of the post' />
				</div>
				<div>
					Location <input type="url" name="" id="" placeholder="location of the post" />
				</div>
				<input type="submit" value="Submit Post" />
			</div>
		</div>
	);
}

export default Addpost;