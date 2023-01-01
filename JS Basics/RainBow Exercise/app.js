const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!
for (let i = 1; i < colors.length+1; i++) {
    document.querySelector(`span:nth-of-type(${i})`).style.color=colors[i-1];
}


