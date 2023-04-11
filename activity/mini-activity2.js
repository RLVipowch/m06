function gradeEvaluator(grade) {
    let letterDistinction;
    switch (true) {
      case (grade >= 90):
        letterDistinction = "A";
        break;
      case (grade >= 80):
        letterDistinction = "B";
        break;
      case (grade >= 71):
        letterDistinction = "C";
        break;
      case (grade <= 70):
        letterDistinction = "F";
        break;
      default:
        letterDistinction = "Invalid";
        break;
    }
    return letterDistinction;
  }
  
  let letterDistinction = gradeEvaluator(85);
  console.log(letterDistinction);