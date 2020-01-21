

	
	var firstCol=document.getElementById('days');
	
	var toPrint=firstCol;

	var holdDate='';
	

	var d=new Date(2020,1,0).toString().split(" ");;
	var fcol=``;
	holdDate=` 			<th></th>
						<th></th>
					    <th><img src="minus.png" style="margin-top:-250%; width: 50px; height: 50px;" onclick="decrementMonth()" id="decrement"></th>
					    <th>
						
						<input type="input" placeholder="2020" class="control-form" style="width: 150% !important; font-size: 20px; margin-top: 10px; border-radius: 2px !important; font-size: 15px; "  id="inputYear">
						<button type="button" class="btn btn-primary" onclick="updateDays(0)"  style="width: 150% !important;  margin-top: 10px; " ><strong>Set</strong></button>
						<strong><select class="custom-select control-form" style="width: 150% !important; font-size: 20px; font-style:bold; margin-top: 10px" onchange="updateDays(0)" id="selected"></strong>
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
						<h3><strong>Days:</strong></h3></th>
					    <th></th>
					    <th></th> 
					    <th></th> 
					    <th><img src="plus.png"  style="margin-top:-250%; width: 50px; height: 50px;"onclick="incrementMonth()" id="increment"></th>
						`;
	for(var i=0;i<d[2];i++)
	{
			
		holdDate+=`<th class="days" style="background-color:black; color:white; border-right: 1px solid white; width: 150% !important; padding:12px" id="day${i+1}"><h2>${i+1}</h2></th>`;
	
	}
	toPrint.innerHTML+=holdDate;




	function updateDays(called)
	{
		var month=parseInt(document.getElementById('selected').value);
		var selected;	
		var s;
		var yearValue=document.getElementById('inputYear').value;

		if (yearValue=='' && called==0 ) 
		{		
				selected=exactMonth(month);
				s=new Date(2020,month,0).toString().split(" ");
	
		}	
		else if (yearValue!='' && called==0 	)
		{	
				selected=exactMonth(month);
				s=new Date(yearValue,month,0).toString().split(" ");
		

		}
		else if (yearValue=='' && called==1 )
		{		
				if(month+1==13)
				{
					selected=exactMonth(1);
					s=new Date(2020,1,0).toString().split(" ");
				}
				else
				{
					selected=exactMonth(month+1);
					s=new Date(2020,month+1,0).toString().split(" ");
				}
			
			
		}
		else if (yearValue!='' && called==1 )
		{	
				if(month+1==13)
				{
					selected=exactMonth(1);
					s=new Date(yearValue,1,0).toString().split(" ");
				}
				else
				{
					selected=exactMonth(month+1);
					s=new Date(yearValue,month+1,0).toString().split(" ");
				}
				
		}
		else if (yearValue=='' && called==-1 )
		{	
				if(month-1==0)
				{
					selected=exactMonth(12);
					s=new Date(2020,12,0).toString().split(" ");
				}
				else
				{   
					selected=exactMonth(month-1);
					s=new Date(2020,month-1,0).toString().split(" ");
				}
				
		}
		else if (yearValue!='' && called==-1 )
		{
				if(month-1==0)
				{
					selected=exactMonth(12);
					s=new Date(yearValue,12,0).toString().split(" ");
				}
				else
				{
					selected=exactMonth(month-1);
					s=new Date(yearValue,month-1,0).toString().split(" ");
				}
				
		}
	
		holdDate=`		<th></th>
						<th></th>
					    <th><img src="minus.png"  style="margin-top:-250%; width: 50px; height: 50px;" onclick="decrementMonth()" id="decrement"></th>
					    <th>
					    <input type="input" placeholder="2020" class="control-form" style="width: 150% !important; font-size: 20px; margin-top: 10px; border-radius: 2px !important; font-size: 15px; "  id="inputYear" value=${yearValue}>
						
						<button type="button" class="btn btn-primary"  style="width: 150% !important;  margin-top: 10px; size: fixed;" onclick="updateDays(0)" >
						<strong>Set</strong>
						</button>

						<select class="custom-select control-form" style="width: 150% !important; font-size: 20px; font-style:bold; margin-top: 10px" onchange="updateDays(0)" id="selected"></strong>
						 ${selected}
						 </select>
						<h3><strong>Days:</strong></h3>
						</th>
					    <th></th>
					    <th></th> 
					    <th></th> 
					    <th><img src="plus.png"  style="margin-top:-250%; width: 50px; height: 50px;" onclick="incrementMonth()" id="increment"></th>`;
		if (s[2]==28) {holdDate+=`<th></th>`}
		toPrint.innerHTML="";
	
			for(var i=0;i<s[2];i++)
		{
				setTimeout(holdDate+=`<th class="days" style="background-color:black; color:white; border-right: 1px solid white; padding:12px;" id="day${i+1}" ><h2>${i+1}</h2></th>`,10000);
			
		}
	
		
		toPrint.innerHTML+=holdDate;

	}
	function incrementMonth()
	{
		updateDays(1);
	}
	function decrementMonth()
	{
		updateDays(-1);
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




