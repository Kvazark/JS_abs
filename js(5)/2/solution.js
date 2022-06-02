function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  switch (convention) {
    case 'Pascal Case':
        let resultPC = text.replace(/\S*/g, function(s){ return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase(); });;
        document.getElementById("result").innerText = resultPC.replaceAll(' ','');
        break;
    case 'Camel Case':
      function CamelCase(str) {
        let test =str
            .toLowerCase()
            .split(' ')
            .map(function(word) {return word[0].toUpperCase() + word.substr(1);}).join('');
        return str[0].toLowerCase() + test.substring(1)}
        document.getElementById("result").innerText = CamelCase(text);
        break;
    default:
        document.getElementById("result").innerText = "Error!";
        break;
    }
}

