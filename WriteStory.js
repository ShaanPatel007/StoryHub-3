import * as React from 'react';
import { TextInput , Text , TextInput , View , KeyboardAvoidingView , TouchableOpacity , ToastAndroid} from 'react-native';
import { StyleSheet } from 'react-native';

import { Header } from 'react-native-elements';
import {db} from '../config';

export default class WriteScreen extends React.Component{
constructor(props){
    super(props);
    this.setState = {
      title: '',
      author: '',
      storyText: ''
    }
  }

  submitStory = () => {
    db.collection('stories').add({
      title : this.state.title,
      author : this.state.author,
      storyText : this.state.storyText
    })
    var submitMessage = "Book Submitted"
  }

  render(){
  return (
 <KeyboardAvoidingView>
 <View>  

<Header
backgroundColor = {'green'}
 centerComponent = {{
    text : 'Story Hub',
    style : { color: 'black', fontSize: 30}
}}
/>

<TextInput 
placeholder="Story Title"
placeholderTextColor='black'
onChangeText= {(text)=>{
this.setState({
title: text
})
}}
value={this.state.title}
style={styles.title}/>
<TextInput
placeholder="Author"
 placeholderTextColor='black'
 onChangeText= {(text)=>{
this.setState({
author: text
})
}}
 value={this.state.author}
style={styles.author} />
<TextInput 
placeholder="Write your story"
placeholderTextColor='black'
onChangeText= {(text)=>{
this.setState({
storyText: text
})
}}
value={this.state.storyText}
style={styles.storyText}
multiline={true}/>

<TouchableOpacity 
style = {styles.submitButton}
onPress={
  submitStory , 
  ToastAndroid.show(submitMessage , ToastAndroid.SHORT)}>
<Text>Submit</Text>
</TouchableOpacity>
    </View> 
    </KeyboardAvoidingView>
  );
}
}


const styles = StyleSheet.create({
submitButton:{  justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'aquamarine',
      width: 80,
      height: 40,color:'black',}
});