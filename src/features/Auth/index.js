import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Title, Content, Button, H1 } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Auth extends Component {
  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    Actions.main();
  }

  render() {
    return(
      <Container>
        <View style={styles.container}>
          <Content>
            <Text style={styles.text}>cahoots</Text>
            <Button onPress={this.onLogin} bordered info rounded style={styles.btn}>
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

export default Auth;
