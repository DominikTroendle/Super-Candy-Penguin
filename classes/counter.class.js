class Counter extends Foreground {
    
    constructor () {
        super();
    }

    drawCounter(ctx, object) {
        ctx.font = '48px Modak';
        ctx.fillStyle = 'white';
        ctx.fillText(object.currentAmount, this.x + 65, this.y + 43);
    }

    increaseCount(object) {
        object.currentAmount++;
    }

    decreaseCount(object) {
        object.currentAmount--;
    }
}