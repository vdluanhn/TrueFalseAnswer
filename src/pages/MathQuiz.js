import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../assets/styles/StyleSheet';

const randomNum = (fromNum, toNum) => {
  return Math.floor(Math.random() * toNum) + fromNum;
};

// const LIST_MATH = ['+', '-', 'x', ':'];
export const MathQuiz = () => {
  const [valueOne, setValueOne] = useState(1);
  const [valueTwo, setValueTwo] = useState(1);
  const [valueResult, setValueResult] = useState(2);
  //   const [valueMath, setValueMath] = useState('+');
  useEffect(() => {
    const value1 = randomNum(1, 100);
    const value2 = randomNum(1, 100);
    // const valueMath = LIST_MATH[Math.random() * LIST_MATH.length];
    console.log('math ', valueMath);
    setValueOne(value1);
    setValueTwo(value2);
    setValueResult(value1 + value2);
    // setValueMath(valueMath);
    set;
    return () => {};
  }, []);

  const handleClick = (result) => {};
  return (
    <View style={styleSheet.container}>
      <Text style={styles.title}>Math quiz</Text>
      <View style={styleSheet.containerInput}>
        <View style={styles.squareLeft}>
          <Text style={styleSheet.valueParam}>{valueOne}</Text>
        </View>
        <View
          style={[
            styles.squareLeft,
            {
              backgroundColor: 'transparent',
              borderWidth: 0,
              flexDirection: 'row',
              justifyContent: 'center',
            },
          ]}>
          <View style={styles.cycle}>
            <Text style={styleSheet.valueParam}>+</Text>
          </View>
        </View>
        <View style={styles.squareRight}>
          <Text style={styleSheet.valueParam}>{valueTwo}</Text>
        </View>
      </View>
      <View style={styleSheet.resultView}>
        <Text style={[styleSheet.valueParam, {fontSize: 40}]}>
          {valueResult}
        </Text>
      </View>
      <View style={styleSheet.actionView}>
        <View style={styleSheet.activeTrue}>
          <Text style={styleSheet.valueParam}>TRUE</Text>
        </View>
        <View style={styleSheet.activeFalse}>
          <Text style={styleSheet.valueParam}>FALSE</Text>
        </View>
      </View>
    </View>
  );
};
const styleSheet = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  valueParam: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    height: '100%',
    textAlignVertical: 'center',
  },
  resultView: {
    height: 100,
    width: 200,
    backgroundColor: 'yellow',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  actionView: {
    height: 150,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  activeTrue: {
    width: 150,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'green',
    alignSelf: 'center',
  },
  activeFalse: {
    width: 150,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
});
