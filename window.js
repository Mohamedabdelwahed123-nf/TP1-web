    let secretNumber; 
    let maxAttempts;  
    let attemptsLeft;
    let difficultyLevel; 

    
    function generateRandomNumber(max) {
      return Math.floor(Math.random() * max) + 1;
    }

    function startGame(difficulty) {
      difficultyLevel = difficulty;
      switch (difficulty) {
        case "facile":
          maxAttempts = 10;
          secretNumber1=10;;
          secretNumber = generateRandomNumber(10); 
          break;
        case "intermediare":
          maxAttempts = 7;
          secretNumber1=100;
          secretNumber = generateRandomNumber(100); 
          break;
        case "difficile":
          maxAttempts = 5;
          secretNumber1=200;
          secretNumber = generateRandomNumber(200); 
          break;
      }
      attemptsLeft = maxAttempts;
    
      document.getElementById("result").innerHTML = `Niveau ${difficulty} : Essayez de deviner le nombre entre 1 et ${secretNumber1}`;
    }


    function checkGuess() {
      const userGuess = parseInt(document.getElementById("Nombre").value);
      if (isNaN(userGuess)) {
        alert("Veuillez entrer un nombre valide !");
        return;
      }
      
      
      if (userGuess === secretNumber) {
        document.getElementById("result").innerHTML = `Félicitations ! Vous avez deviné le nombre secret ${secretNumber}.`;
      } else {
        attemptsLeft--;
        
        if (attemptsLeft <= 0) {
          document.getElementById("result").innerHTML = `Dommage ! Le nombre secret était ${secretNumber}. Vous avez épuisé toutes vos tentatives.`;
        } else {
          document.getElementById("result").innerHTML = `Essai incorrect ! Il vous reste ${attemptsLeft} tentatives. Essayez encore !`;
        }
      }
    }

    
    document.getElementById("facile").addEventListener("click", () => startGame("facile"));
    document.getElementById("intermediare").addEventListener("click", () => startGame("intermediare"));
    document.getElementById("difficile").addEventListener("click", () => startGame("difficile"));

    document.getElementById("checkBtn").addEventListener("click", checkGuess);