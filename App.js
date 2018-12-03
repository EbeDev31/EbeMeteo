/**
 * Meteo App by Ebe
 * Main module in charge of display 3 other components forming the app
 */

import React,{Component} from "react";
import {View, Text, TextInput,StyleSheet} from "react-native"
import Form from "./components/Form";
import SearchResult from "./components/SearchResult";

//  api key token to insert in the api request url
// this can be obtain only once you create an account on Openweatherapi(I believe)
const API_KEY = "66948e9f0179d17ef1254ff0813355e5";


class App extends React.Component {
    state = {
      city2be: undefined,
      country2be: undefined,
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      pressed:false
    }

//Geting user input and setting it as new state value
   handleCity = (text) => {


      this.setState({ city2be: text })
   }

 //Geting user input and setting it as new state value
   handleCountry = (text) => {
      this.setState({ country2be: text })
   }

   /*
      Function ion charge of taking in user inputs and , inserting them as
      paramenter for the api request
   */
  getWeather = async (e) => {

    const city = this.state.city2be;
    const country = this.state.country2be;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    let data="";
    let noErr=false;

    try{
      data = await api_call.json();
    }
    catch(e){

      console.log("EbeHorror In Catch!!!");
      console.log(e);
      noErr=true;

    }

    console.log("This is Data:");
    console.log(data);
    console.log("EbeHorror");
    console.log(noErr);
   if (city && country&&(noErr===false)) {
      this.setState({
        temperature: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        pressed:true
      });
    } else {
       this.setState({
         temperature: undefined,
         city: undefined,
         country: undefined,
         humidity: undefined,
        description: undefined,
         error: "Please enter the values.",
         pressed:true
       });

       alert("Please enter the values.");
     }

   /*  this.setState({
         pressed:false
       });*/


  }


  render() {
    return (
      <View style={styles.main}>
            <View style={styles.searchArea} >
              <Form 
                handleCity={this.handleCity}
                handleCountry={this.handleCountry} 
                getWeather={this.getWeather}
                />
            </View>

            <View style={styles.resultsArea}>
              <SearchResult 
                  pressed={this.state.pressed}
                  city={this.state.city}
                  country={this.state.country}
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
            </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
    },

    searchArea: {
      flex: 4,
      backgroundColor: 'red',
     // borderColor: 'white', 
      backgroundColor: 'black',
        borderBottomColor: 'yellow',
        borderBottomWidth:1, 
    },

    resultsArea: {
        backgroundColor: 'black',
        flex: 6

    },
});

export default App;


