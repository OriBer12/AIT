const readXlsxFile = require('read-excel-file/node');


// File path.
readXlsxFile('1.xlsx').then((rows) => {
	temp = {};
	temp["kpi"] = [];
  rows[0].forEach((element,index) => {
	  console.log('--------' + element + '----------');
	  if(rows[1][index] == null){
	  	temp[element] = null;
	  }else{
			if(temp[element] == undefined){
				temp[element] = {};
				ele = element;
	  	}else{
				kpi = {};
				kpi["name"] = element;
				while(rows[1][index] != null){
					console.log('--------' + rows[1][index] + '----------');
					console.log(rows[1][index]);
		  	  		temp[ele][rows[1][index]] = null;
					rows[1].shift();
				}
				temp["kpi"].push(kpi);
		}
	  }
    rows[1].shift();
	});

	console.log(JSON.stringify(temp));
})
