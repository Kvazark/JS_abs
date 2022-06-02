function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById("searchField").value;
      let filter = input.toUpperCase();
      let tbody = document.getElementsByTagName('tbody')[0];
      let result = document.getElementById('result');
      let count = 0
      

      first: for (let i = 0; i < tbody.children.length; i++){ // метка перед циклом, чтобы не продолжать текущую итерацию после нахождения совпадения
         let tr = tbody.children[i];
         for( let j =0; j < tr.children.length; j++){
            let td = tr.children[j];
            if(td.innerText.toUpperCase().includes(filter) || filter ===''){
               tr.classList.add('select');
               count ++;
               continue first;
            }else{
               tr.classList.remove('select');
            }
         }  
      }
      result.innerText = `${count} matches found`;
   }
}