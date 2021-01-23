import React, { Component } from 'react';
import { Alert, View, SafeAreaView, FlatList, ActivityIndicator,StyleSheet, SafeAreaViewBase } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Icon,IconButton } from 'native-base';
import firebase from 'firebase';
import dataItem from '../components/dataItem'
import { v4 as uuid } from 'uuid'
export default class tabTWO extends Component{
    constructor(props){
    super(props);
    this.data = props.data;
    this.state={ 
    liste:[],
    } }

    
    
     
     
     componentDidMount(){






        
       firebase.database().ref('haber').on('value', (snapshot) =>{
         var lis = []
         snapshot.forEach((child)=>{
          lis.push({
           key: child.key,
           name:child.val().name,
           description:child.val().description,
           title:child.val().title,
           urlToImage:child.val().thumbnail
         })



         



       })

       


      this.setState({liste:lis})
       
      
      
     })
     
     
     

     
    }
    
    onPressDelete=()=>{

        
        
        

        
        let userRef= firebase.database().ref('haber');
        userRef.remove()
        
        
  
        
          
      }
    
    render(){

        
     return(
        <View style={{}}>
                  <FlatList style={{width:'100%'}}
             data={this.state.liste}
             keyExtractor={(item)=>item.key}
             renderItem={({item})=>{
                return(
                <ListItem thumbnail>
                <Left>
                <Thumbnail square source={{
                        uri: item.urlToImage != null
                            ? item.urlToImage : 'https://via.placeholder.com/150'
                    }} />
                </Left>
                
                <Body>
                    <Text numberOfLines={2} >{item.title}</Text>
                    <Text note numberOfLines={3}>{item.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{item.name}</Text>
                    </View>
                </Body>
              
                <Right>
                    <Button  onPress={this.onPressDelete}  rounded succes iconLeft small style={{backgroundColor:'blue',width:110,fontSize:15,flex:1}}  >
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