import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerScroll: {
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitulo: {
    marginBottom: 15,
    fontSize: 18,
  },
  cardVinho: {
    flexDirection: 'row',
    backgroundColor:'#ab887c',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  vinhoImg:{
    width: 60,
    height: 120,
  },
  cardBoxDescricao: {
    flex: 1
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff'
  },
  cardBoxDescricao: {
    color: '#fff',
  }
});

export default estilos;