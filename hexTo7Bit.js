function to7Bit(str){
  var l = str.length;
  var r = "";
	for(var d=0;d<l;d++){
		if((d+1)%8 == 0){
			d++;
		}
	  var c =(((str[d+1])?str[d+1].charCodeAt(0).toString(2).slice(- (d+1)%8) : "") + str[d].charCodeAt(0).toString(2));
    r += parseInt(c.slice(0,c.length - ((str[d+1])?  (d+1)%8 -1 : 1)) , 2).toString(16).toUpperCase();
	}
	return r;
}
