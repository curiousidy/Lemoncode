//SLOT MACHINE

interface Machine {
    contador:number;
    play():void;
    insertCoin():void;
    getLucky():[boolean,boolean,boolean];
    youWin():void;
    youLose():void;
    resetMachine():void;
}

class SlotMachine implements Machine {
    contador:number = 0;
    
    play(){
        //INCREASE NUMBER OF COINS
        this.insertCoin();
        if (this.getLucky().every(bool => bool )) {
            this.youWin();
            this.resetMachine();
        } else {
            this.youLose();
        }
    }

    insertCoin(){
        //INCREASE COUNTER
        this.contador++;
    }
    
    getLucky(): [boolean, boolean, boolean] {
        const bool1:boolean = Math.random()>0.5;
        const bool2:boolean = Math.random()>0.5;
        const bool3:boolean = Math.random()>0.5;
    
        return[bool1,bool2,bool3];
        
    }

    youWin(){
        //SHOW MESSAGE
        console.log(`Congratulations!!!. You won ${this.contador} coins!!`);
    }

    youLose(){
        //SHOW MESSAGE
        console.log("Good luck next time!!");
    }

    resetMachine(){
        //RESET COUNTER
        this.contador = 0;
    }
}

  
  const machine1 = new SlotMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"