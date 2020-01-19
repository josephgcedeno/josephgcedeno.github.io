

	
	var firstCol=document.getElementById('days');
	
	var toPrint=firstCol;

	var holdDate='';
	

	var d=new Date(2020,1,0).toString().split(" ");;
	var fcol=``;
	holdDate=` <th>
						 	<select class="custom-select control-form" style="width: 150% !important; font-size: 15px;" onchange="updateDays()"id="selected">
			                     <option value="1">Jan</option>
			                     <option value="2">Feb</option>
			                     <option value="3">March</option>
			                     <option value="4">April</option>
			                     <option value="5">May</option>
			                     <option value="6">June</option>
			                     <option value="7">July</option>
			                     <option value="8">August</option>
			                     <option value="9">Sept</option>
			                     <option value="10">Oct</option>
			                     <option value="11">Nov</option>
			                     <option value="12">Dec</option>
					    </select>
						<input type="input" placeholder="Year..." class="control-form" style="width: 150% !important;  margin-top: 10px; border-radius: 2px !important; font-size: 15px; "  id="inputYear">
						<button type="buton" class="btn btn-primary" style="width: 150% !important; margin-top: 10px;" id="yrTrigger" onclick="myYear();">set</button>
						<h3>Days:</h3>
						</th>
						<th></th>
					    <th></th>
					    <th></th>
						`;
	for(var i=0;i<d[2];i++)
	{
			
		holdDate+=`<th class="days" style="background-color:black; color:white; border-right: 1px solid white; width: 150% !important;"><p>${i+1}<p></th>`;
	
	}
	toPrint.innerHTML+=holdDate;


	function myYear()
	{
		var year=document.getElementById('inputYear').value;
		var month=document.getElementById('selected').value;
		var selected=exactMonth(month);		
		var s=new Date(year,month,0).toString().split(" ");
		holdDate=` <th>
						 	<select class="custom-select control-form" style="width: 150% !important; font-size: 15px;" onchange="updateDays()" id="selected">
			                 ${selected}
					    </select>
						<input type="input" placeholder="Year..." class="control-form" style="width: 150% !important;  margin-top: 10px; border-radius: 2px !important; font-size: 15px; "  id="inputYear">
						<button type="buton" class="btn btn-primary" style="width: 150% !important; margin-top: 10px;"  onclick="myYear();" >set</button>
						<h3>Days:</h3>
						</th>
						<th></th>
					    <th></th>
					    <th></th>
						`;
		
	
		toPrint.innerHTML="";
		for(var i=0;i<s[2];i++)
		{
				holdDate+=`<th class="days" style="background-color:black; color:white; border-right: 1px solid white"><p>${i+1}<p></th>`;
				
		}
		
		toPrint.innerHTML+=holdDate;


	}









	function updateDays()
	{
		var month=document.getElementById('selected').value;
		var selected=exactMonth(month);		
		var s=new Date(2020,month,0).toString().split(" ");
		holdDate=` <th>
						 	<select class="custom-select control-form" style="width: 150% !important; font-size: 15px;" onchange="updateDays()" id="selected">
			                 ${selected}
					    </select>
						<input type="input" placeholder="Year..." class="control-form" style="width: 150% !important;  margin-top: 10px; border-radius: 2px !important; font-size: 15px; " id="inputYear">
						<button type="buton" class="btn btn-primary" style="width: 150% !important; margin-top: 10px;" onclick="myYear();">set</button>
						<h3>Days:</h3>
						</th>
						<th></th>
					    <th></th>
					    <th></th>
						`;
		
	
		toPrint.innerHTML="";
		for(var i=0;i<s[2];i++)
		{
				holdDate+=`<th class="days" style="background-color:black; color:white; border-right: 1px solid white"><p>${i+1}<p></th>`;
				
		}
		
		toPrint.innerHTML+=holdDate;


	}

	function exactMonth(month)
	{
		if (month==1) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3">March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;

		}
		else if (month==2) 
		{

		 return `
		 <option value="1" >Jan</option>
         <option value="2" selected>Feb</option>
         <option value="3">March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==3) 
		{ 
		  return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" selected>March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==4) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" >March</option>
         <option value="4" selected>April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==5) 
		{	
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" >March</option>
         <option value="4">April</option>
         <option value="5" selected>May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==6) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" >March</option>
         <option value="4">April</option>
         <option value="5" >May</option>
         <option value="6" selected>June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==7) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" selected>March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7" selected>July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==8) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" selected>March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8" selected>August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==9) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" selected>March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9" selected>Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==10) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" selected>March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10" selected>Oct</option>
         <option value="11">Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==11) 
		{
	     return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" selected>March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11" selected>Nov</option>
         <option value="12">Dec</option>
         `;
		}
		else if (month==12) 
		{
		 return `
		 <option value="1" selected>Jan</option>
         <option value="2">Feb</option>
         <option value="3" selected>March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">Sept</option>
         <option value="10">Oct</option>
         <option value="11">Nov</option>
         <option value="12" selected>Dec</option>
         `;
		}




	}




