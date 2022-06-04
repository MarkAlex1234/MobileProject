import Matter from 'matter-js';
import Variant from '../components/Variant';

export default restart => {
  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0.4;

  return {
    physics: {engine, world},
    Variant: Variant(world, 'green', {x: 50, y: 200}, {height: 40, width: 40}),
  };
};
