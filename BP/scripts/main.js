import { system, world } from "@minecraft/server";

system.runInterval(() => {
  const time = world.getTimeOfDay();
  const hour = Math.floor(time / 1000).toString().padStart(2, '0');
  const min = Math.floor((time % 1000) / 60).toString().padStart(2, '0');
  world.getAllPlayers().forEach((player) => {
    player.runCommandAsync(`titleraw ${player.name} actionbar {"rawtext":[{"text":"§a${hour}:${min}"}]}`)
  })
})