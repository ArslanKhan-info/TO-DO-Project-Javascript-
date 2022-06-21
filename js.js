let add = document.getElementById("add");
    // changing table data with array
    tableChanger = () => {
      if (localStorage.getItem('itemJson') == null) {
        return console.log("No work pending")
        let tbody = document.getElementById("tbody")
        tbody.innerHTML = ""
      } else {
        console.log("Table modified")
        itemArrayStr = localStorage.getItem('itemJson');
        itemArray = JSON.parse(itemArrayStr)
        tbody.innerHTML = ""
        itemArray.forEach((element, index) => {
          tbody.innerHTML += `
                    <tr>
                      <th scope="row">${index + 1}</th>
                      <td>${element[0]}</td>
                      <td>${element[1]}</td>
                      <td><button type="button" class="btn btn-danger btn-sm" id="del" onclick="del(${index})">Delet</button></td>
                    </tr>`
        })
      }
    }
    tableChanger();


    // taking inpute
    add.addEventListener("click", () => {
      let title = document.getElementById("title").value;
      let des = document.getElementById("descripsion").value;
      if(title==""){
        document.getElementById("error-title").innerHTML="Please enter minimum 1 word in Title" 
      }else if(des==""){
        document.getElementById("error-title").innerHTML=""
        document.getElementById("error-des").innerHTML="Please enter minimum 1 word in Description" 
      }else{
        document.getElementById("error-title").innerHTML=""
        document.getElementById("error-des").innerHTML="" 
        if (localStorage.getItem('itemJson') == null) {
        let itemArray = [];
        itemArray.push([title, des])
        localStorage.setItem("itemJson", JSON.stringify(itemArray))
      } else {
        itemArrayStr = localStorage.getItem('itemJson');
        itemArray = JSON.parse(itemArrayStr)
        itemArray.push([title, des])
        localStorage.setItem("itemJson", JSON.stringify(itemArray))
      }
      tableChanger();  
      }
    })
    // deleting a single task
    del = (e) => {
      itemArrayStr = localStorage.getItem('itemJson');
      itemArray = JSON.parse(itemArrayStr)
      itemArray.splice(e, 1)
      localStorage.setItem('itemJson', JSON.stringify(itemArray))
      tableChanger();
    }
    // clear all`
    clr = () => {
      if (confirm("Do you want to clear all task ")) {
        localStorage.clear();
        let tbody = document.getElementById("tbody")
        tbody.innerHTML=""
      }
    }