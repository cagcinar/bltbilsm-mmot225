import React, { useContext,Component } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import Tab1 from '../screens/tabONE';
import Tab2 from '../screens/tabTWO';
import Tab4 from '../screens/tabFOUR';
import FormButton from '../components/FormButton';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs ,Button,Text,View,Icon} from 'native-base';




    const HomeScreen = ({navigation}) => {
    const {logout} = useContext(AuthContext);
    
  
      return (
          <Container>
              
              <Tabs>
                  <Tab tabStyle={{ backgroundColor: 'blue' }}
                      activeTabStyle={{ backgroundColor: 'red' }}
                      heading="TumHaberler">
                      <Tab1 />
                  </Tab>

                  <Tab tabStyle={{ backgroundColor: 'blue' }}
                        activeTabStyle={{ backgroundColor: 'orange' }}
                        heading="FAVORİLER">
                        <Tab2 />
                    </Tab>

                    


                  <Tab tabStyle={{ backgroundColor: 'blue' }}
                      activeTabStyle={{ backgroundColor: 'purple  ' }}
                      heading="DahaSonraOku"  > 
                     <Tab4 />
                  </Tab>                  
                

                  
                  
                  

                  
                  
                  
              </Tabs>
              <View    style={{ marginBottom:0,maxHeight:35, backgroundColor:'white'}} >
                  <Button    style={{backgroundColor:'black',bottom:0,right:0 ,}} buttonTitle='Logout' onPress={() => logout()} ><Icon name='arrow-back'/><Text>Çıkış Yap</Text></Button> 

                  </View>
          </Container>
      );
  }

export default HomeScreen;
