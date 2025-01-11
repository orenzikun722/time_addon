import { system, world } from "@minecraft/server";

system.runInterval(() => {
  var time = world.getTimeOfDay();
  var hour = Math.floor(time / 1000);
  if(hour < 18){
    hour =+ 6;
  }else{
    hour =- 18;
  }
  var min = Math.floor((time % 1000) / (1000 / 60)).toString().padStart(2, '0');
  world.getAllPlayers().forEach((player) => {
    player.runCommandAsync(`titleraw ${player.name} actionbar {"rawtext":[{"text":"§a${hour}:${min}"}]}`)
  })
})
