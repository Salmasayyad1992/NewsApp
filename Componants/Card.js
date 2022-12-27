import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
    card: {
    //   backgroundColor: theme.COLORS.WHITE,
    //   marginVertical: theme.SIZES.BASE,
        shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 2,
      borderWidth: 0,
      width:"90%",
      minHeight: "auto",
      marginLeft:"auto",
      marginRight:"auto",
      marginBottom: 16
    },
    cardTitle: {
      flex: 1,
      flexWrap: 'wrap',
      paddingBottom: 6
    },
    cardDescription: {
    //   padding: theme.SIZES.BASE / 2
    },
    imageContainer: {
      borderRadius: 3,
      elevation: 1,
      overflow: 'hidden',
    },
    image: {
      // borderRadius: 3,
    },
    horizontalImage: {
      height: 122,
      width: 'auto',
    },
    horizontalStyles: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    verticalStyles: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    },
    fullImage: {
      height: 215
    },
    shadow: {
    //   shadowColor: theme.COLORS.BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.1,
      elevation: 2,
    },
  });
export default Card;