import React,{Component} from "react";
import {View,Text,Button,TextInput} from "react-native";


const Titles = (props) => (
	<View>
		<Text className="title-container__title">Weather Finder</Text>
		<Text className="title-container__subtitle">Find out temperature, conditions and more...</Text>

	</View>
);

export default Titles;