import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20
  },
  titulo: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  boxcard: {
    
    backgroundColor:'rgb(171, 136, 124)',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: '#979797',
    borderWidth: 1,
    
    
  },
  imgcard:{
    flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 100,
    marginBottom: 5,
    
    
  },
  titulocard: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#fff'
    
  },
});

export default estilos;