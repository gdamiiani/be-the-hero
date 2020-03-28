import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import numberToBrl from '../../utils/numberToBrl';

import logoImg from '../../assets/logo.png';

import styles from './styles';

function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;

  const {
    name: ong, title, description, value, email, whatsapp, city, uf,
  } = incident;

  const message = `Olá ${ong}, estou entrando em contato, pois gostaria de ajudar no caso
 "${title}" com o valor de ${numberToBrl(value)}`;

  function navigateToIncidents() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Héroi do caso: ${title}`,
      recipients: [email],
      body: message,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={() => navigateToIncidents()}>
          <Feather name="arrow-left" size={30} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {ong}
          {' '}
          de
          {' '}
          {city}
          /
          {uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{title}</Text>
        <Text style={styles.incidentValue}>{description}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{numberToBrl(value)}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o héroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => sendWhatsapp()}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={() => sendMail()}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Details;
