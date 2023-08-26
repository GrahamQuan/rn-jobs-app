import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'
import { useRouter } from 'expo-router'

const JOB_TYPES = ['Full-time', 'Part-time', 'Contractor']

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState(JOB_TYPES[0])
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Graham</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => router.push(`/search/${searchTerm}`)}
          activeOpacity={0.8}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JOB_TYPES}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
              style={styles.tab(activeJobType, item)}
              activeOpacity={0.8}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
