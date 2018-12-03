import React,{Component} from "react";
import {View,Text,Button,TextInput,StyleSheet} from "react-native";
const styles = StyleSheet.create({

  text:{
         
  	      color :'white',
  	    //  fontSize:0,
  },
  
    buttonText: {
    	flex:1,
        color :'white',
        fontWeight: 'bold',
        alignItems:"center",
       // fontSize: 20
    },
 resultArea: {
       // backgroundColor: 'orange',
        flex:1,
        flexDirection: "column",
        color:"white",
    },

    loctemp:{
     // backgroundColor: 'yellow',
       flexDirection: "row",
       flex:1,

    },

     description:{
   // backgroundColor: 'blue',
    flexDirection: "row",
    flex: 1,
    justifyContent:"center",
    //alignContent:"center",
    alignItems: 'center',
    color:"white",

    },


    
    location: {
       flex:1,    
    justifyContent:"center",
    marginLeft:20,
    },
    loctext:{
      fontSize:35,
    },
    temptext:{
      fontSize:100,
      alignSelf:"center",
    },
    humidtext:{
      	fontSize:20,
    	alignSelf:"center",
    },
    desctext:{
      fontSize:50,

    },

    condition:{
      //backgroundColor: 'green',
      flex: 1,
    justifyContent:"center",
    alignItems: 'center',
    },
});


export default class SearchResult extends Component{

	constructor(props){
		super(props)
	}

	render(){
		
		console.log("Is it pressed????");
		console.log(this.props.pressed);

		if(this.props.pressed===true&&this.props.city && this.props.country){
			return(
		
					<View style = {styles.resultArea}>

							   <View style={styles.loctemp}>
											  
										 
		                           		 <View style={styles.location}>
		                                     	<Text style={[styles.loctext,styles.text]}>{this.props.city}</Text> 
												<Text style={[styles.loctext,styles.text]}>{this.props.country }</Text> 
		                           		 </View>


		                            	 <View style={styles.condition}>
										 	<Text style={[styles.temptext,styles.text]}>{this.props.temperature}°</Text>
										 	<Text style={[styles.humidtext,styles.text]}>Humidity:{this.props.humidity}%</Text>  
		                            	 </View>
		                        </View>
                                
	                              <View style={styles.description}>
	  	
									 	<Text style={[styles.desctext,styles.text]}>{this.props.description}</Text> 
	                              </View>
						 
					</View>
				);
		}else{

			return(

					<View style = {styles.buttonText}>
					</View>
					);

		}

	}
}

