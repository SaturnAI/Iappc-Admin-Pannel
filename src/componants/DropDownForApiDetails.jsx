import React from 'react'
import { Select } from 'antd'

const DropDownForApiDetails = ({data, defaultValue, change}) => {

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
      onChange={(value) => change(value)}
      options={data}
    />
  )
}

export default DropDownForApiDetails