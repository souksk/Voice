let data = "Bạn Ah được bẩy điểm";
//console.log(data.match(/^(.*?(\bduoc\b)[^$]*)$/g));

    data = data.toLowerCase();
    data = data.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    data = data.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    data = data.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    data = data.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    data = data.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    data = data.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    data = data.replace(/đ/g,"d");
    data = data.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    data = data.replace(/ + /g," ");
    data = data.trim(); 
    console.log(data)
    console.log(data.match(/.+?(?=duoc)/g))
    console.log(data.match(/duoc.(.*)$/g))
    var a = data.match(/duoc.(.*)$/g);
    b =a[0].replace(/duoc/g,"");
    console.log(a[0])
    //console.log(a.Replace("duoc", string.Empty))
  //  console.log(data.match(/duoc\w?\K.*/))
    //console.log(data.match(/^(.*?(\bduoc\b)[^$]*)$/g));
    
