function myFunction(){
	var input, filter, table, tr,td,i,j,found;
	input=document.getElementById("myinput");
	filter=input.value.toUpperCase();
	table= document.getElementById("mytable");
	tr=table.getElementsByTagName("tr");
	th=table.getElementsByTagName("th");
	for(i=0;i<tr.length;i++){
		td=tr[i].getElementsByTagName("td");
		for(j=0;j<td.length;j++){
			if(td[j].innerHTML.toUpperCase().indexOf(filter)>-1){
				found=true;
			}
		}
		if(found){
			
			tr[i].style.display = "";
			found=false;
		}
		else{
			if((tr[i].id != 'tableHeader')&& (tr[i].id != 'tableHeader1')){
				tr[i].style.display = "none";
			}
		}
	}
}

