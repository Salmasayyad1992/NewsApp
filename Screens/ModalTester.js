import React, { useState } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    return (
      <View style={{ flex: 1 }}>

  
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
  
        
          </View>
        </Modal>
      </View>
    );
  }
  
  export default ModalTester;