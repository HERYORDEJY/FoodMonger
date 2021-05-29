import React, { useState } from 'react';
import * as RN from 'react-native';
// import Dialog from 'react-native-dialog';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Paragraph,
  Dialog,
} from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { SecondaryColor } from '../modules/colors';

interface Props {
  visible: boolean;
  children: React.ReactNode;
  hideDialog?: () => void;
}

export default function DialogueBox(props: Props) {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    // <Dialog.Container
    //   visible={props.visible}
    //   contentStyle={{}}
    //   onBackdropPress={props.onBackdropPress}
    //   blurStyle={{ backgroundColor: 'red' }}
    // >
    //   {props.children}
    //   {/*<Dialog.Title>Account delete</Dialog.Title>*/}
    //   {/*<Dialog.Description>*/}
    //   {/*  Do you want to delete this account? You cannot undo this action.*/}
    //   {/*</Dialog.Description>*/}
    //   {/*<Dialog.Button label='Cancel' onPress={handleCancel} />*/}
    //   {/*<Dialog.Button label='Delete' onPress={handleDelete} />*/}
    // </Dialog.Container>

    <RN.View>
      <Portal>
        {/*<Dialog*/}
        {/*  style={styles.container}*/}
        {/*  visible={props.visible}*/}
        {/*  onDismiss={props.hideDialog}*/}
        {/*>*/}
        {/*  {props.children}*/}
        {/*</Dialog>*/}

        <Modal
          style={{ backgroundColor: SecondaryColor + 71 }}
          visible={props.visible}
          onDismiss={props.hideDialog}
          contentContainerStyle={styles.containerStyle}
        >
          {props.children}
        </Modal>
      </Portal>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(10),
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
    margin: RFValue(20),
    padding: RFValue(20),
    borderRadius: RFValue(10),
  },
});
