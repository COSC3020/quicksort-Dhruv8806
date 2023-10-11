[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12243782&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

QuickSort sorts an array by dividing it into smaller parts over and over. When it organizes the items in each part, it goes through each item one at a time. Since the array gets split in half each time, it takes about a certain number of steps, kind of like using a logarithmic number of steps (O(log n), where 'n' is the array size). So, the worst-case time it takes to sort the array is O(n log n). As the array gets bigger, it doesn't take a whole lot longer to sort it, which is great for sorting big sets of things.

-> Sources used: 

- TA
- Andon Mefford - Classmate 
- https://www.freecodecamp.org/news/how-to-write-quick-sort-algorithm-with-javascript/ 
- https://www.guru99.com/quicksort-in-javascript.html

