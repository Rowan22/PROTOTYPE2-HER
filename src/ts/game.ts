import * as PIXI from 'pixi.js'
import { Player } from './player'
import PlayerImage from "../images/player.png"

export class Game {
private player: Player
public pixi: PIXI.Application

    constructor() {
        const container = document.getElementById("container")!
            this.pixi = new PIXI.Application({ width: 900, height: 512 })
            container.appendChild(this.pixi.view)
        this.pixi.loader
                .add('player', PlayerImage)


            this.pixi.loader.load(() => this.loadCompleted())

    }

    public loadCompleted() {
      this.player = new Player(this,this.pixi.loader.resources["player"].texture!, 500, 500)
      this.pixi.stage.addChild(this.player)

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    private update(delta: number) {
        this.player.update(delta)
    }

}

