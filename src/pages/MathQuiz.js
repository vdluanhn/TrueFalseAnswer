import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import styles from '../assets/styles/StyleSheet';
const backgroundImage = '../assets/images/background.jpg';
const randomNum = (fromNum, toNum) => {
  return fromNum + Math.floor(Math.random() * (toNum - fromNum));
};

const LIST_MATH = ['+', '-', 'x'];
export const MathQuiz = () => {
  const [valueOne, setValueOne] = useState(1);
  const [valueTwo, setValueTwo] = useState(1);
  const [valueResult, setValueResult] = useState(2);
  const [valueMath, setValueMath] = useState('+');
  const [total, setTotal] = useState(0);
  const [numOfTrue, setNumOfTrue] = useState(0);
  const [animValueOne, setAnimValueOne] = useState(0);
  const [animValueTwo, setAnimValueTwo] = useState(new Animated.Value(700));

  const randomMathPlay = () => {
    if (total >= 100) {
      Alert.alert('End game, your result: ', numOfTrue + '/' + total);
      setNumOfTrue(0);
      setTotal(0);
      return;
    }
    console.log('----------------------------------------------');
    console.log(
      'You have two seconds to think and choose the answer true or false for this question',
    );
    const value1 = randomNum(1, 100);
    const value2 = randomNum(1, 100);
    const valueMath1 = LIST_MATH[Math.floor(Math.random() * LIST_MATH.length)];
    console.log('math ', valueMath1);
    setValueOne(value1);
    setValueTwo(value2);
    var resultValue = value1 + value2;
    switch (valueMath1) {
      case '+':
        resultValue = value1 + value2;
        break;
      case '-':
        resultValue = value1 - value2;
        break;
      case 'x':
        resultValue = value1 * value2;
        break;
      case ':':
        resultValue = value1 / value2;
        break;
    }
    console.log(
      'ket qua: ' +
        value1 +
        ' ' +
        valueMath1 +
        ' ' +
        value2 +
        ' ' +
        '= ' +
        resultValue,
    );
    const fromNum = resultValue - 1;
    const toNum = resultValue + 1;
    console.log('from ', fromNum);
    console.log('to ', toNum);
    const valueRusultRandomShow = randomNum(fromNum, toNum);
    console.log('reulst show: ' + valueRusultRandomShow);
    if (valueRusultRandomShow === resultValue)
      console.log('Ket qua hien thi la dung!');
    else console.log('Ket qua hien thi SAI cmnr!');
    setValueResult(valueRusultRandomShow);
    setValueMath(valueMath1);
    const newTotal = total + 1;
    setTotal(newTotal);
  };
  useEffect(() => {
    randomMathPlay();
    // const run = Animated.timing(animValueOne, {toValue: 0, duration: 1000});
    // run.start();
  }, []);

  useEffect(() => {
    const timeRun = setInterval(() => {
      randomMathPlay();
    }, 2000);
    return () => {
      clearInterval(timeRun);
    };
  });

  const handleClick = (result) => {
    console.log(result);
    var resultReal = valueOne + valueTwo;
    switch (valueMath) {
      case '+':
        resultReal = valueOne + valueTwo;
        break;
      case '-':
        resultReal = valueOne - valueTwo;
        break;
      case 'x':
        resultReal = valueOne * valueTwo;
        break;
      case ':':
        resultReal = valueOne / valueTwo;
        break;
    }

    if (resultReal === valueResult && result) {
      console.log('Chon Dung cmnr!');
      const newNumTrue = numOfTrue + 1;
      setNumOfTrue(newNumTrue);
    } else if (resultReal !== valueResult && !result) {
      console.log('Chon Dung cmnr!');
      const newNumTrue = numOfTrue + 1;
      setNumOfTrue(newNumTrue);
    } else {
      console.log('Choosen fail cmrn, you are a chicken...');
    }

    randomMathPlay();
  };
  const run = Animated.timing(animValueOne, {toValue: 0, duration: 1000});
  return (
    <View style={styleSheet.container}>
      <Image
        source={require(backgroundImage)}
        style={{
          position: 'absolute',
          resizeMode: 'stretch',
          height: '100%',
          width: '100%',
        }}
      />
      <View
        style={[
          styleSheet.actionView,
          {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            opacity: 0.3,
          },
        ]}
      />
      <View className="header">
        <View>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'blue',
              opacity: 0.3,
            }}
          />
          <Text style={styles.title}>Math quiz</Text>
        </View>
        <Text style={styles.numOfTrue}>
          Number of correct: {numOfTrue}/{total}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {/* <View style={{backgroundColor: 'grey', height: 100, width: 100}}></View>
        <View style={{backgroundColor: 'grey', height: 100, width: 100}}></View> */}
      </View>
      <View style={styleSheet.containerInput}>
        <View style={[styles.squareLeft, {marginLeft: animValueOne}]}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
              opacity: 0.4,
            }}
          />
          <Text style={styles.valueParam}>{valueOne}</Text>
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
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'yellow',
                opacity: 0.4,
              }}
            />
            <Text style={styleSheet.valueParam}>{valueMath}</Text>
          </View>
        </View>
        <View style={styles.squareRight}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'green',
              opacity: 0.4,
            }}
          />
          <Text style={styleSheet.valueParam}>{valueTwo}</Text>
        </View>
      </View>
      <View style={styleSheet.resultView}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'yellow',
            opacity: 0.4,
          }}
        />
        <Text style={[styleSheet.valueParam, {fontSize: 40}]}>
          {valueResult}
        </Text>
      </View>
      <View>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            opacity: 0.4,
            borderWidth: 1,
            borderColor: 'white',
          }}
        />
        <View style={styleSheet.actionView}>
          <TouchableOpacity
            style={styleSheet.activeTrue}
            onPress={() => handleClick(true)}>
            <View>
              <View
                style={{
                  borderRadius: 10,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'green',
                  opacity: 0.7,
                }}
              />
              <Text
                style={[
                  styleSheet.valueParam,
                  {fontWeight: 'normal', fontFamily: 'Buff'},
                ]}>
                TRUE
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleSheet.activeFalse}
            onPress={() => handleClick(false)}>
            <View>
              <View
                style={{
                  borderRadius: 10,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'red',
                  opacity: 0.7,
                }}
              />
              <Text
                style={[
                  styleSheet.valueParam,
                  {fontWeight: 'normal', fontFamily: 'Buff'},
                ]}>
                FALSE
              </Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: 'transparent',
    color: 'white',
  },
  resultView: {
    height: 100,
    width: 200,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  actionView: {
    height: 130,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  activeTrue: {
    width: 150,
    height: '80%',
    borderRadius: 10,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  activeFalse: {
    width: 150,
    height: '80%',
    borderRadius: 10,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
});
