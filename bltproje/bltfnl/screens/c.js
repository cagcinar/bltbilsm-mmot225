import React, { Component } from 'react';
import { Alert, View, SafeAreaView, FlatList, ActivityIndicator,StyleSheet, SafeAreaViewBase } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Icon } from 'native-base';
import firebase from 'firebase';
import DataItem from '../components/dataItem'
import AsyncStorage from '@react-native-community/async-storage';
export default class tabFOUR extends Component{
    constructor(props){
    super(props);
    this.state={ 
    users:[],
    
    } }
    
     
     
     componentDidMount= async ()=>{
        const userList = await AsyncStorage.getItem("DATA2");
        this.setState({ users: JSON.parse(userList) });
        

       
        

      
      
     }
     
     
     handleDeleteOnPress = () => {

        AsyncStorage.removeItem("DATA2").then(r => {
            this.setState({ users: [] });
        }).catch(e => {
            console.warn("error : ", e);
        })

    }


     
    

    
    render(){

        
     return(
        <View style={{}}>
                  <FlatList style={{width:'100%'}}
             data={this.state.users}
             keyExtractor={(item)=>item.key}
             renderItem={({item})=>{
                return(
                <ListItem thumbnail>
                <Left>
                <Thumbnail square source={{
                        uri:item.urlToImage != null
                            ? item.urlToImage : 'https://via.placeholder.com/150'
                    }} >
                    </Thumbnail>
                </Left> 
                
                <Body>
                    <Text numberOfLines={2} >{item.title}</Text>
                    <Text note numberOfLines={3}>{item.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{item.name}</Text>
                    </View>
                </Body>
              
                <Right>
                    <Button rounded succes iconLeft small style={{backgroundColor:'blue',width:110,fontSize:15,flex:1}} onPress={this.handleDeleteOnPress} >
                    <Icon name='trash-bin'/>
                        <Text>Sil</Text>
                    </Button>
                  
                </Right>
            </ListItem>)
   }}/>
      </View>
     )
    }
}   