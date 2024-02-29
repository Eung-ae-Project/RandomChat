import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from "@components/Slider/styles"
function VerticalMode() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		autoplay:true,
		autoplaySpeed: 3000,
		pauseOnHover: true
		// beforeChange: function(currentSlide, nextSlide) {
		// 	console.log("before change", currentSlide, nextSlide);
		// },
		// afterChange: function(currentSlide) {
		// 	console.log("after change", currentSlide);
		// }
	};
	return (
		<div className="slider-container">
			<Slider {...settings}>
				<div>
					<Box>1</Box>
				</div>
				<div>
					<Box>2</Box>
				</div>
				<div>
					<Box>3</Box>
				</div>
				<div>
					<Box>4</Box>
				</div>
				<div>
					<Box>5</Box>
				</div>
				<div>
					<Box>6</Box>
				</div>
			</Slider>
		</div>
	);
}

export default VerticalMode;
