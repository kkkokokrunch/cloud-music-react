import React,{memo} from 'react'
import styled from 'styled-components'
import Scroll from '../scroll/index'
import {PropTypes} from 'prop-types'
import style from '../../assets/global-style'

// 父元素： display: inline-block; white-space: nowrap; 子元素： display: inline-block; 即可，
//样式部分
const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: center;
  overflow: hidden;
  >span:first-of-type{
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    color: grey;
    font-size: ${style["font-size-m"]};
    /* vertical-align: middle; */
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 5px;
  border-radius: 10px;
  &.selected{
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`

function Horizen(props) {
  const {list,oldVal,title} = props
  const {handleClick} = props

  return (
    <Scroll direction={"horizental"}>
      <div style={{width:'max-content'}}>
        <List>
          <span>{title}</span>
          {
            list.map((item) => {
              return (
                <ListItem
                  key={item.key}
                  className={`${oldVal === item.key ? 'selected':''}`}
                  onClick={()=> handleClick(item.key)}
                >
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  )
}

Horizen.defaultProps = {
  list:[],
  oldVal:'',
  title:'',
  handleClick:null
}

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
}
export default memo(Horizen);