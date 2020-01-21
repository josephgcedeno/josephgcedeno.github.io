<!DOCTYPE html>
<html>
<head>
	<title>calendar</title>


	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>


	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

	<script type="text/javascript" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  <script type="text/javascript" src="js/queryDropDown.js"></script>
</head>

<body>

	<br>


	
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="pink" style=" width:100% !important">
						
				
					<table class="table"  >
			
			        	<thead style="table-layout: auto !important;">
			      			<tr id="days" >
							
							</tr>
				   		</thead>

				   		<tbody>
				   			<tr id="result">
				   				
				   			
				   			</tr>
				   		</tbody>

		   	   		</table>
		   	   	    </div>
				</div>

		   	</div>
		</div>
	
</body>
<script type="text/javascript" src="js/calendar.js"></script>
</html>


<script type="text/javascript">
	
	var toPrint=document.getElementsById('result');

	toPrint+=`<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>`;
	for(var i; i< 31;i++;)
	{
		toPrint.innerHTML+=`<td>BObo</td>`
	}
</script>