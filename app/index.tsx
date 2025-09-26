import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";


export default function Home(){
    const [peso, setpeso] = useState('');   
    const [altura, setaltura] = useState('');
    
    function Formimc(setpeso: string,setaltura:string): Number {
    
        var res = setpeso / setaltura * setaltura;
        return res;
    } 
    

    return(
        <View style={styles.body}>
            <TextInput placeholder="Digite seu peso"
            onChangeText={setpeso}/>
            <text style={styles.title}>
                seu peso é:{peso}
                </text>

            <TextInput placeholder="Informe sua altura"
            onChangeText={setaltura}/>
            <text style={styles.title}>
               sua altura é:{altura}
            </text>

            
          z
        

            

            

            
        </View>
    );
}

const styles = StyleSheet.create({
    body : {
        backgroundColor: 'red',
        padding: "auto"
    },
    title: {
        fontSize: 19}
});