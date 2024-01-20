import React from 'react'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'

const DropDownForApiDetails = ({data, defaultValue, change}) => {

  const dispatch = useDispatch()

  return (
    <Select
      defaultValue={defaultValue}
      style={{
        width: 230,
        height: 25,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14
      }}
      onChange={(value) => dispatch(change(value))}
      options={data}
    />
  )
}

export default DropDownForApiDetails