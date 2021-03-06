import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Player extends PIXI.Sprite {
xspeed= 0
yspeed= 0
    constructor(game: Game, texture:PIXI.Texture, x: number, y: number) {
        super(texture)
        this.anchor.set(0.5)
        this.x = x
        this.y = y
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public update(delta: number): void {
        this.x += this.xspeed
        this.y += this.yspeed
        
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "ARROWLEFT":
                this.xspeed = -7
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 7
                break
            case "W":
            case "ARROWUP":
                this.yspeed = -4             
                 break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 4
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }

}