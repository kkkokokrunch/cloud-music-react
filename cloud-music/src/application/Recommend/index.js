// import React, { useEffect } from 'react';
// import Slider from '../../components/slider/';
// import { connect } from "react-redux";
// import * as actionTypes from './store/actionCreators';
// import RecommendList from '../../components/list/';
// // import Scroll from '../../baseUI/scroll/index';
// // import { Content } from './style';

// function Recommend () {

//   const {bannerList,recommendList} = props

//   const { getBannerDataDispatch, getRecommendListDataDispatch } = props

//   useEffect(() => {
//     // 相当于在生命周期中调用获取网络请求的方法
//     getBannerDataDispatch()
//     getRecommendListDataDispatch()
//   },[])

//   const bannerListJS = bannerList ? bannerList.toJS () : []
//   const recommendListJS = recommendList ? recommendList.toJS () :[]

//   return (
//     <div>
//       <Slider bannerList={bannerList}></Slider>
//       <RecommendList recommendList={recommendList}></RecommendList> 
//     </div>
//   )
// }

// const mapStateToProps = (state) => ({
//   bannerList: state.getIn (['recommend', 'bannerList']),
//   recommendList: state.getIn (['recommend', 'recommendList']),
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBannerDataDispatch () {
//       dispatch (actionTypes.getBannerList ());
//     },
//     getRecommendListDataDispatch () {
//       dispatch (actionTypes.getRecommendList ());
//     },
//   }
// };

// export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));

import React, { useEffect } from 'react';
import Slider from '../../components/slider/';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';
import RecommendList from '../../components/list/';
// import Scroll from '../../baseUI/scroll/index';
// import { Content } from './style';

function Recommend (props){
  const { bannerList, recommendList } = props;

  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect (() => {
    getBannerDataDispatch ();
    getRecommendListDataDispatch ();
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];

  return (
    // <Content>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
    // </Content> 
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn (['recommend', 'bannerList']),
  recommendList: state.getIn (['recommend', 'recommendList']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  }
};

// 将 ui 组件包装成容器组件
export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));