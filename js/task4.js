table.onclick = function () {
  let i = 0;
  let j = 0;
  for(i = 2; i < 10; i++) {
    for(j = 1; j < 11; j++) {
      document.write(`${i} * ${j} = ${i * j}<br />`);
    } 
    document.write("<br />");
  }
}
