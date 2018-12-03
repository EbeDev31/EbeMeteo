import React,{Component} from "react";
import {View,Text,Button,TextInput,NetInfo, Dimensions,TouchableOpacity,StyleSheet} from "react-native";


const { width } = Dimensions.get('window');

export default class Forms extends Component{

  constructor (props){
    super(props);

    this.state= {
      isConnected: true
    };
  }

// This is a function in charge of checking the internet connectivity status,
// Based on which the interface is optimized and the user is notified
   handleConnectivityChange = isConnected => {
      if (isConnected) {
        this.setState({ isConnected });
       // alert("alert for if: "+isConnected)
      } else {
        this.setState({ isConnected });
        //alert("alert for else: "+isConnected)
      }
    };

    componentDidMount() {
      NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

  MiniOfflineSign(isOnline) {

      if (isOnline===false){
                 return (
                    <View style={styles.offlineContainer}>
                      <Text style={styles.offlineText}>No Internet Connection</Text>
                    </View>
                  );
                }
            else{
              return (
          
                        <View style={styles.searchArea}>
                        
                                            <View style={styles.inputs}>
                                                <TextInput name="city" placeholder="City..." 
                                                    onChangeText={this.props.handleCity} 
                                                    style={styles.TextInput}>
                                                </TextInput>
                                                <TextInput name="country" placeholder="Country..." 
                                                onChangeText={this.props.handleCountry}
                                                  style={styles.TextInput}>
                                                </TextInput>
                                            </View>
                        
                                          <View style={styles.inputBtn}>
                                              <TouchableOpacity onPress={this.props.getWeather} 
                                              style={{height: 120, backgroundColor:                                                                                                       'blue'}} title="some">
                                                <Text style={styles.buttonText}>Go</Text>
                                              </TouchableOpacity>
                                          </View>

                        </View>
                );
            }
    
    }


  render(){

      return(
                        <View style={styles.searchArea}>
                            {this.MiniOfflineSign(this.state.isConnected)} 
                         </View>

        );
      }




}




const styles = StyleSheet.create({
  
    searchArea: {
       // backgroundColor: 'black',
         flex: 1,
         flexDirection: "row",
        alignItems:"center",
        borderTopColor: 'red',
    },

    inputs: {

      flexDirection: "column",
      flex:2,
    },
    TextInput:{
      height: 60,
       borderBottomColor: 'white', 
       color:"white",
       fontSize:20,
        borderBottomWidth:1,
        margin:20,
        },

   inputBtn: {
        flex:1,
         marginTop:55,
    },

    buttonText: {
        textAlign: 'center',
        alignItems:"center",
        color :'white',
        fontWeight: 'bold',
        fontSize: 70
    },

    offlineContainer: {
       flex:1,
    backgroundColor: 'red',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  offlineText: { color: '#fff' }
});


