import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

import estilos from './estilos';
import vinhobranco from '../../assets/vinho-branco.jpg'
import vinhorose from '../../assets/vinho-rose.jpg'
import vinhoespecial from '../../assets/vinho-especial.jpg'
import vinhotinto from '../../assets/vinho-tinto.jpg'


export default function TelaCatalogo () {
  return (
    <View style={estilos.container}>
   <ScrollView style={estilos.containerScroll}>
    <Text style={estilos.titulo}>Nossos Vinhos</Text>
    <Text style={estilos.subtitulo}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>

    <View style={estilos.cardVinho}>
    <Image resizeMode="contain" style={estilos.vinhoImg} source={ vinhobranco }></Image>
    <View style={estilos.cardBoxDescricao}>
    <Text style={estilos.cardTitulo}>Chatigny Chardonnay</Text>
    <Text style={estilos.cardDescricao}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
    </View>
    </View>

    <View style={estilos.cardVinho}>
    <Image resizeMode="contain" style={estilos.vinhoImg} source={ vinhorose }></Image>
    <View style={estilos.cardBoxDescricao}>
    <Text style={estilos.cardTitulo}>Concha y Toro Exportacion</Text>
    <Text style={estilos.cardDescricao}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
    </View>
    </View>

    <View style={estilos.cardVinho}>
    <Image resizeMode="contain" style={estilos.vinhoImg} source={ vinhotinto }></Image>
    <View style={estilos.cardBoxDescricao}>
    <Text style={estilos.cardTitulo}>Portada Winemaker's</Text>
    <Text style={estilos.cardDescricao}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
    </View>
    </View>

    <View style={estilos.cardVinho}>
    <Image resizeMode="contain" style={estilos.vinhoImg} source={ vinhoespecial }></Image>
    <View style={estilos.cardBoxDescricao}>
    <Text style={estilos.cardTitulo}>Elvio Cogno Ravera Barolo</Text>
    <Text style={estilos.cardDescricao}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
    </View>
    </View>
   </ScrollView>
   </View>
  )
}