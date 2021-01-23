import React, { Component,useEffect } from 'react';
import FB from '../firebase';
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, View,Icon } from 'native-base';
import { v4 as uuid } from 'uuid'
import AsyncStorage from '@react-native-community/async-storage';

export default class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
        this.state = {
            data2: []
        }
        
    }

    handlePress =() =>{
        const {url,title} = this.data;
        this.props.onPress({url,title});
    }

    handleOnClick = async () => {
       const dataToDB={
            
            thumbnail:this.data.urlToImage,
            title:this.data.title,
            description:this.data.description,
            name:this.data.source.name,

        }

        let userList = this.state.data2;
        userList.push(dataToDB);



        await AsyncStorage.setItem("DATA2", JSON.stringify(userList));


        this.setState({ data2: userList });
    }

    onPressAdd=()=>{

        
        const id = uuid(Int8Array)
        
        const dataToDB={
            
            thumbnail:this.data.urlToImage,
            title:this.data.title,
            description:this.data.description,
            name:this.data.source.name,

        }

        var haberRef = FB.database().ref('haberler')
        var sRef = haberRef.child(id);  
      FB.database()
      .ref(sRef)
      .set(dataToDB)
      

    }
    
    
    

    

    render() {

        
      

        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{
                        uri: this.data.urlToImage != null
                            ? this.data.urlToImage : 'https://via.placeholder.com/150'
                    }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={3}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{this.data.source.name}</Text>
                        
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>Goruntule</Text>
                    </Button>
                    <Button  onPress={this.onPressAdd}  rounded succes iconLeft small style={{backgroundColor:'red'}} >
                        <Icon name='heart'/>
                        <Text>Favori</Text>
                    </Button>
                    <Button  onPress={this.handleOnClick}  rounded succes iconLeft small style={{backgroundColor:'green',width:110,fontSize:15,flex:1}} >
                        <Icon name='book'/>
                        <Text  >SonraOku</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
}