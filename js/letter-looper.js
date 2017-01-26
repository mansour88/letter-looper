var letter, i, k;

while (!letter) {
    letter = prompt("Enter a character.");
}

for (i = 0; i < 10; i += 1) {
    for (k = 0; k < i; k += 1) {
    document.write(letter);
    }
    document.write("<br>");
}

document.write("<br>");

for (i = 1; i < 10; i += 1) {
    for (k = 0; k <= i; k += 1) {
    document.write(letter);
    }
    document.write("<br>");
}

document.write("<br>");

for (i = 2; i < 10; i += 1) {
    for (k = 0; k <= i; k += 1) {
    document.write(letter);
    }
    document.write("<br>");
}