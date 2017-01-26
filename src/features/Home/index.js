import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Title, Content, Button, H1 } from 'native-base';

class Home extends Component {

  render() {
    return(
      <Container>
        <View style={styles.container}>
          <Content>
            <Text style={styles.text}>cahoots</Text>
            <Button bordered info rounded style={styles.btn}>
              Log in with instagram
            </Button>
            <Button bordered info rounded style={styles.btn}>
              Log in with facebook
            </Button>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  },
  btn: {
    marginTop: 20
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50
  }
}

export default Home;
