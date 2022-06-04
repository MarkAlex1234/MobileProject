import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {useEffect, useState} from 'react';
import Obstacles from '../components/Obstacles';
import Variant from '../components/Variant';
import FlatButton from '../assests/theme/flatButton';

export default function Game({navigation}) {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const variantLeft = screenWidth / 2;
  const [variantBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2 + 30,
  );
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gravity = 3;
  let obstacleWidth = 60;
  let obstacleHeight = 300;
  let gap = 200;
  let gameTimerId: NodeJS.Timer;
  let obstaclesTimerId: NodeJS.Timer;
  let obstaclesTimerIdTwo: NodeJS.Timer;

  //start bird falling
  useEffect(() => {
    if (variantBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(variantBottom => variantBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      };
    }
    //if i dont have variantBottom as a dependecy, it wont stop
  }, [variantBottom]);

  const jump = () => {
    if (!isGameOver && variantBottom < screenHeight) {
      setBirdBottom(variantBottom => variantBottom + 50);
    }
  };

  //start first obstacle
  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesTimerId);
      };
    } else {
      setScore(score => score + 1);
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * 100);
    }
  }, [obstaclesLeft]);

  //start second obstacle
  useEffect(() => {
    if (obstaclesLeftTwo > -60) {
      obstaclesTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesTimerIdTwo);
      };
    } else {
      setScore(score => score + 1);
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegHeightTwo(-Math.random() * 100);
    }
  }, [obstaclesLeftTwo]);

  //check for collisions
  useEffect(() => {
    if (
      ((variantBottom < obstaclesNegHeight + obstacleHeight + 30 ||
        variantBottom > obstaclesNegHeight + obstacleHeight + gap - 30) &&
        obstaclesLeft > screenWidth / 2 - 30 &&
        obstaclesLeft < screenWidth / 2 + 30) ||
      ((variantBottom < obstaclesNegHeightTwo + obstacleHeight + 30 ||
        variantBottom > obstaclesNegHeightTwo + obstacleHeight + gap - 30) &&
        obstaclesLeftTwo > screenWidth / 2 - 30 &&
        obstaclesLeftTwo < screenWidth / 2 + 30)
    ) {
      gameOver();
    }
  });

  const gameOver = () => {
    clearInterval(gameTimerId);
    clearInterval(obstaclesTimerId);
    clearInterval(obstaclesTimerIdTwo);
    setIsGameOver(true);
  };

  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        {isGameOver && <Text>{score}</Text>}
        <Variant variantBottom={variantBottom} variantLeft={variantLeft} />
        <Obstacles
          color={'green'}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          randomBottom={obstaclesNegHeight}
          gap={gap}
          obstaclesLeft={obstaclesLeft}
        />
        <Obstacles
          color={'yellow'}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          randomBottom={obstaclesNegHeightTwo}
          gap={gap}
          obstaclesLeft={obstaclesLeftTwo}
        />
        <FlatButton
          text="Main Menu"
          onPress={() => navigation.navigate('Main Menu')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
