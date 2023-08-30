import { View, Text } from 'react-native'
import React from 'react'

const Practice = () => {
    const {data} = useQuery('users',getUsers,{
        staleTime: 5000,
        cacheTime: Infinity,
    })
    data
  return (
    <View>
      <Text>Practice</Text>
    </View>
  )
}

export default Practice