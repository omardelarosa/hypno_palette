function factorial(n){
  if (n == 1) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

function print_silly(index){
  console.log("Silly! Number ", index)
}

function for_loop(start, stop, block_of_code){

  if (start >= stop) {
    return block_of_code(start)
  } else {
    block_of_code(start)
    return for_loop(start+1, stop, block_of_code)
  }

}