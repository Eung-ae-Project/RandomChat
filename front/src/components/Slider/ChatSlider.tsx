import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ChatSlider() {
    const settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
      <Container>
          <Slider {...settings}>
              {/* WaitingCard는 그냥 예시일 뿐이므로, 서버에서 배너(이미지)를 배열로 담아주면, map으로 뿌리기 */}
              <WaitingCard
                thumbnail='https://dummyimage.com/364x278/000/fff'
                candy='https://dummyimage.com/70x70/000/fff'
                date={10}
                decs='캔디함에서 기다리고 있어요.'
                title='필보이드 핸드크림'
              />
              <WaitingCard
                thumbnail='https://dummyimage.com/364x278/000/fff'
                candy='https://dummyimage.com/70x70/000/fff'
                date={10}
                decs='캔디함에서 기다리고 있어요.'
                title='필보이드 핸드크림'
              />
              <WaitingCard
                thumbnail='https://dummyimage.com/364x278/000/fff'
                candy='https://dummyimage.com/70x70/000/fff'
                date={10}
                decs='캔디함에서 기다리고 있어요.'
                title='필보이드 핸드크림'
              />
              <WaitingCard
                thumbnail='https://dummyimage.com/364x278/000/fff'
                candy='https://dummyimage.com/70x70/000/fff'
                date={10}
                decs='캔디함에서 기다리고 있어요.'
                title='필보이드 핸드크림'
              />
          </Slider>
      </Container>
    );
}
