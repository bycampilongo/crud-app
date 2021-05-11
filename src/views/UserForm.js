import React, { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})
  const { dispatch } = useContext(UsersContext)

  return (
    <View style={style.form}>
      <Text style={style.label}>Nome</Text>
      <TextInput
        onChangeText={name => setUser({ ...user, name })}
        placeholder="Nome do Usuário"
        value={user.name}
        style={style.input}
      />
      <Text style={style.label}>E-mail</Text>
      <TextInput
        onChangeText={email => setUser({ ...user, email })}
        placeholder="Email do Usuário"
        value={user.email}
        style={style.input}
      />
      <Text style={style.label}>Avatar Url</Text>
      <TextInput
        onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
        placeholder="Avatar Url do Usuário"
        value={user.avatarUrl}
        style={style.input}
      />
      <Button
      style={style.button}
        title="Salvar"
        onPress={() => {
         dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user
          })
          navigation.goBack()
        }}

      />
    </View>

  )
}

const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 5,
    padding: 5
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    margin: 100
  }
})