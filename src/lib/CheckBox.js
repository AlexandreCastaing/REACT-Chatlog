import React, { Component } from 'react'
import styled from 'styled-components'
import { TouchableOpacity, View } from 'react-native'

const CustomCheckBox = styled(View)`
  height: 48px;
  width: 48px;
  background: ${props => (props.checkBoxActive ? '#448ccb' : 'transparent')};
  border-radius: 0px;
  position: relative;
  justify-content: center;
  margin: 0px 8px 0 0;
  border: solid 1px #e1e4e5;
`
const CheckIcon = styled(View)`
  border-radius: 0px;
  align-self: center;
  transform: rotate(-30deg);
`

/*==============================
    Custom  checkbox styled 
===============================*/
const CheckIconWrapper = styled(View)`
  position: relative;
  left: 2px;
  top: -2px;
`
const CheckIconVertical = styled(View)`
  height: 5px;
  width: 2px;
  background: ${props => (props.checkBoxActive ? '#fff' : '#333a')};
`
const CheckIconHorizontal = styled(View)`
  height: 2px;
  width: 16px;
  background: ${props => (props.checkBoxActive ? '#fff' : '#333a')};
`

class CheckBox extends Component {
  state = {
    checkBox: false
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ checkBox: !this.state.checkBox })
        }}>
        <CustomCheckBox checkBoxActive={this.state.checkBox}>
          <CheckIcon>
            <CheckIconWrapper>
              <CheckIconVertical checkBoxActive={this.state.checkBox} />
              <CheckIconHorizontal checkBoxActive={this.state.checkBox} />
            </CheckIconWrapper>
          </CheckIcon>
        </CustomCheckBox>
      </TouchableOpacity>
    )
  }
}

export default CheckBox;