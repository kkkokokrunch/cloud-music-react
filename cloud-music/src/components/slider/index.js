import React, {useEffect,useState} from 'react'
import { SliderContainer } from './style'
import "swiper/css/swiper.css"
import Swiper from "swiper"

function Slider (props) {
  const [sliderSwiper,setSliderSwiper] = useState(null)
  const {bannerList} = props

  useEffect(() => {
    if(bannerList.length && !sliderSwiper) {
      // new一个轮播图对象
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {el:'.swiper-pagination'},
      })
      setSliderSwiper(sliderSwiper)
    }
  },[bannerList,sliderSwiper])
// useEffect在每次被调用的时候，都会“记住”这个数组参数，
// 当下一次被调用的时候，会逐个比较数组中的元素，看是否和上一次调用的数组元素一模一样，
// 如果一模一样，第一个参数（那个函数参数）也就不用被调用了，
// 如果不一样，就调用那个第一个参数
  return(
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐"/>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo (Slider);