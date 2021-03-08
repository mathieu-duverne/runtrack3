function tri(numbers){
        for(let a = 0;a <= numbers.length;a++) {
            console.log("yes");
            if(numbers[a+1] < numbers[a])
            {
                let easy = numbers[a];
                numbers[a] = numbers[a+1];
                numbers[a+1] = easy;
                tri(numbers);
            }
        }
        return numbers;
    }
let numbers = [3,6,2,1,5];
document.write(tri(numbers));