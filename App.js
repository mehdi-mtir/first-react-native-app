import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

 const App = () => {
  const [profil, setProfil] = useState(
    {
      nom : "Jean Dupont",
      email : "jean.dupont@gmail.com",
      telephone : "06 12 13 14 15",
      age : "25",
      ville : "Montreal",
      bio : "Développeur passioné par le développement d'applications mobiles"
    }
  );

  const [modeEdition, setModeEdition] = useState(false);

  const sauvegarder = ()=>{
    Alert.alert('Succès', 'Profil mis à jour avec succès!');
    setModeEdition(false);
  }

  const annuler = ()=>{
    setModeEdition(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image 
            source={{uri : "https://randomuser.me/api/portraits/men/1.jpg"}}
            style={styles.avatar}
          />
          <Text  style={styles.titre}>Mon Profile</Text>
        </View>
        <View style={styles.formulaire}>
          <View style={styles.champ}>
            <Text style={styles.label}>Nom complet</Text>
            <TextInput 
              style={[styles.input, !modeEdition && styles.inputDisabled]} 
              value={profil.nom} 
              editable={modeEdition} 
              onChangeText={(text)=>setProfil({...profil, nom : text})}/>
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={[styles.input, !modeEdition && styles.inputDisabled]} 
              value={profil.email} 
              editable={modeEdition}
              onChangeText={(text)=>setProfil({...profil, email : text})} />
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Telephone</Text>
            <TextInput 
              style={[styles.input, !modeEdition && styles.inputDisabled]} 
              value={profil.telephone} 
              editable={modeEdition} 
              onChangeText={(text)=>setProfil({...profil, telephone : text})}/>
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Age</Text>
            <TextInput 
              style={[styles.input, !modeEdition && styles.inputDisabled]} 
              value={profil.age} 
              editable={modeEdition}
              onChangeText={(text)=>setProfil({...profil, age : text})} />
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Ville</Text>
            <TextInput 
              style={[styles.input, !modeEdition && styles.inputDisabled]} 
              value={profil.ville} 
              editable={modeEdition}
              onChangeText={(text)=>setProfil({...profil, ville : text})} />
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Biographie</Text>
            <TextInput 
              style={[styles.input, !modeEdition && styles.inputDisabled]} 
              value={profil.bio} 
              editable={modeEdition}
              multiline
              numberOfLines={4}
              onChangeText={(text)=>setProfil({...profil, bio : text})} />
          </View>
          <View style={styles.boutons}>
          {
          !modeEdition && (<TouchableOpacity 
            style={styles.boutonPrincipal}
            onPress={()=>setModeEdition(true)}>
            <Text style={styles.texteBoutonPrincipal}>Modifier</Text>
          </TouchableOpacity>)
          }
          {
          modeEdition && (
          <View style={styles.boutonsEdition}>  
            <TouchableOpacity 
              style={styles.boutonPrincipal}
              onPress={sauvegarder}>
              <Text style={styles.texteBoutonPrincipal}>Sauvegarder</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.boutonSecondaire}
              onPress={annuler}>
              <Text style={styles.texteBoutonSecondaire}>Annuler</Text>
            </TouchableOpacity>
          </View>
            )
          }

        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer : {
    flexGrow : 1,
    padding : 20
  },
  header : {
    alignItems : 'center',
    marginBottom : 30,
    paddingTop : 20
  },
  avatar : {
    width : 120,
    height : 120,
    borderRadius : 60,
    marginBottom : 15,
    borderWidth : 3,
    borderColor : '#0066CC'
  },
  titre : {
    fontSize: 28,
    fontWeight: 'bold',
    color : '#333'
  },
  formulaire : {
    backgroundColor : '#fff',
    borderRadius : 10,
    padding : 20,
    marginBottom : 20,
    shadowColor : '#000',
    shadowOffset :{
      width : 0,
      height : 2
    },
    shadowOpacity : 0.1,
    shadowRadius : 3,
    elevation : 5
  },
  champ : {
    marginBottom : 20
  },
  label : {
    fontSize : 16,
    fontWeight : '600',
    marginBottom : 8,
    color : '#333'
  },
  input : {
    borderWidth : 1,
    borderColor : '#ddd',
    borderRadius : 8,
    padding : 12,
    fontSize : 16,
    backgroundColor : '#fff'
  },
  inputDisabled : {
    backgroundColor : '#f9f9f9'
  },
  boutons : {
    padding : 20
  },
  boutonPrincipal : {
    backgroundColor : '#3F51B5',
    paddingVertical : 15,
    paddingHorizontal : 20,
    borderRadius :8,
    alignItems : 'center',
    flex : 1,
    marginLeft : 5
  },
  texteBoutonPrincipal : {
    color : '#fff',
    fontSize : 16,
    fontWeight : 600
  },
  boutonsEdition : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  boutonSecondaire : {
    backgroundColor : '#757575',
    paddingVertical : 15,
    paddingHorizontal : 20,
    borderRadius :8,
    alignItems : 'center',
    flex : 1,
    marginLeft : 5
  },
  texteBoutonSecondaire : {
    color : '#fff',
    fontSize : 16,
    fontWeight : 600
  },
});

export default App;
