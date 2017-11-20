
module.exports={
    getCookie: function getCookie(data,cname) {
        var name = cname + "=";
        // var decodedCookie = decodeURIComponent(document.cookie);
    //    console.log(data);
        var ca = data.split(';');
    //    console.log(ca);
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}
