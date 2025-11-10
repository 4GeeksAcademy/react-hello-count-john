import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ResetButton from "./RefreshPage";
//create your first component
const Home = (props) => {
	return (
		<div className="bg-black py-5">
			<div className="d-flex justify-content-center align-items-center gap-4 ">
				<div className=" bg-black text-white rounded-3 d-flex justify-content-center align-items-center position-relative display-5 border-start border-end border-2 border-dark"
					style={{ width: "110px", height: "180px"}}>
					<i className="fa-regular fa-clock fa-2xl"></i>
				</div>				
				<div className="bg-black text-white rounded-3 border-start border-end border-2 border-dark d-flex justify-content-center align-items-center display-1 fw-bold"
					style={{ width: "110px", height: "180px" }}>{props.six}</div>
				<div className="bg-black text-white rounded-3 border-start border-end border-2 border-dark d-flex justify-content-center align-items-center display-1 fw-bold"
					style={{ width: "110px", height: "180px" }}>
					{props.five}
				</div>
				<div className="bg-black text-white rounded-3 border-start border-end border-2 border-dark d-flex justify-content-center align-items-center display-1 fw-bold"
					style={{ width: "110px", height: "180px" }}>
					{props.four}
				</div>
				<div className="bg-black text-white rounded-3 border-start border-end border-2 border-dark d-flex justify-content-center align-items-center display-1 fw-bold"
					style={{ width: "110px", height: "180px" }}>
					{props.three}
				</div>
				<div className="bg-black text-white rounded-3 border-start border-end border-2 border-dark d-flex justify-content-center align-items-center display-1 fw-bold"
					style={{ width: "110px", height: "180px" }}>
					{props.two}
				</div>
				<div className="bg-black text-white rounded-3 border-start border-end border-2 border-dark d-flex justify-content-center align-items-center display-1 fw-bold"
					style={{ width: "110px", height: "180px" }}>
					{props.one}
				</div>
			</div>
			<div className="mt-3 d-flex justify-content-center">
			<ResetButton Reset={props.reset} />
			</div>
		</div>
	);
};

export default Home;