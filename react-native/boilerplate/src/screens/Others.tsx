import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

const Others = () => {
  const richText = React.useRef();
  return (
    <Container>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <Text>Description:</Text>
          <RichEditor
            ref={richText}
            initialContentHTML={
              'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
            }
            onChange={descriptionText => {
              console.log('descriptionText:', descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <RichToolbar
                editor={richText}
                actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]}
                iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>) }}
            />
    </Container>
  );
};

export default Others;

const Container = styled(SafeAreaView)`
  background-color: pink;
  flex: 1;
`;
