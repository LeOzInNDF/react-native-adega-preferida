import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import vinhobranco from '../../assets/vinho-branco.jpg'

import estilos from './estilos';


export default function TelaCatalogo () {
  return (
   <ScrollView style={estilos.container}>
    <Text style={estilos.titulo}>Nossos Vinhos</Text>
    <Text>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>

    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={ vinhobranco }></Image>
    <Text style={estilos.titulocard}>Chatigny Chardonnay</Text>
    <Text>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
    </View>

    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={ vinhobranco }></Image>
    <Text style={estilos.titulocard}>Concha y Toro Exportacion</Text>
    <Text>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
    </View>

    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={ vinhobranco }></Image>
    <Text style={estilos.titulocard}>Portada Winemaker's</Text>
    <Text>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
    </View>

    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={ vinhobranco }></Image>
    <Text style={estilos.titulocard}>Elvio Cogno Ravera Barolo</Text>
    <Text>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
    </View>
   </ScrollView>
  )
}