function search() {
   let text = document.getElementById("searchText").value;
   let towns = document.getElementById('towns').children;
   let result = document.getElementById('result');

   let count = 0;
   for (let i = 0; i < towns.length; i++) {
      let town = towns[i];
      if (town.innerText.includes(text)) {
          town.style.fontWeight = 'bold';
          town.style.textDecoration = 'underline';
          count++
      } else {
          town.style.fontWeight = '';
          town.style.textDecoration = '';
      }
  }
  result.innerText = `${count} matches found`;
}
