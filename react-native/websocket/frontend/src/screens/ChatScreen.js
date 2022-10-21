import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {getUniqueId} from 'react-native-device-info';

const ChatScreen = () => {
  const [serverState, setServerState] = useState('Loading...');
  const [messageText, setMessageText] = useState('');
  const [serverMessages, setServerMessages] = useState([]);

  const userId = getUniqueId();
  const serverMessagesList = [];

  const webSocket = useRef(null);

  useEffect(() => {
    webSocket.current = new WebSocket('ws://192.168.219.102:8080/');
    console.log(webSocket.current);

    webSocket.current.onopen = () => {
      setServerState('Connected to the server');
    };

    webSocket.current.onmessage = e => {
      let parse = JSON.parse(e.data);
      serverMessagesList.push(parse);
      setServerMessages([...serverMessagesList]);
    };

    webSocket.current.onerror = e => {
      setServerState(e.message);
    };

    webSocket.current.onclose = e => {
      setServerState('Disconnected. Check internet or server.');
    };

    return () => {
      webSocket.current.close();
    };
  }, []);

  const sendMessage = () => {
    let str = JSON.stringify({user: userId, message: messageText});
    webSocket.current.send(str);
    setMessageText('');
  };

  return (
    <View>
      <Text>{serverState}</Text>
      <Button title="연결" onPress={() => webSocket.current.onopen()} />
      <View
        style={{
          padding: 5,
          flexGrow: 1,
        }}>
        <FlatList
          style={styles.list}
          contentContainerStyle={{paddingBottom: 50}}
          data={serverMessages}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            item.user == userId ? (
              <Text style={styles.myChat}>{item.message}</Text>
            ) : (
              <Text style={styles.otherChat}>{item.message}</Text>
            )
          }
        />
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Add Message'}
          onChangeText={text => {
            setMessageText(text);
          }}
          value={messageText}
        />
        <Pressable onPress={sendMessage} disabled={messageText == ''}>
          <Text style={styles.send}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 8,
  },
  welcomeChat: {
    alignSelf: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#212124',
    fontSize: 16,
    borderRadius: 20,
    marginVertical: 10,
  },
  myChat: {
    alignSelf: 'flex-end',
    padding: 10,
    color: 'white',
    backgroundColor: 'yellow',
    fontSize: 16,
    borderRadius: 20,
    marginVertical: 10,
  },
  otherChat: {
    alignSelf: 'flex-start',
    padding: 10,
    color: 'white',
    backgroundColor: 'gray',
    fontSize: 16,
    borderRadius: 20,
    marginVertical: 10,
  },
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 30,
  },
  send: {
    backgroundColor: 'black',
    color: 'white',
    padding: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 80,
  },
  list: {
    height: '80%',
  },
});
