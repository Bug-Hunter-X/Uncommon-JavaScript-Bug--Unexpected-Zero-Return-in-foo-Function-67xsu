function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This line is the bug, it should be return a * b
  }
  return a * b;
}