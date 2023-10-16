var list1=[];
var list2=[];
var list3=[];
var list4=[];

var n = 1;
var x = 0;

function Addrow()
{
    var Addrows = document.getElementById('show');
    var Newrow = Addrows.insertRow(n);

    list1[x] = document.getElementById("first").value;    
    list2[x] = document.getElementById("last").value;
    list3[x] = document.getElementById("mail").value;
    list4[x] = document.getElementById("age").value;

    var cell1 = Newrow.insertCell(0);
    var cell2 = Newrow.insertCell(1);
    var cell3 = Newrow.insertCell(2);
    var cell4 = Newrow.insertCell(3);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];

    n++;
    x++;
}