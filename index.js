module.exports.getElementIndex = function(id, array) {
 for (var i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      return i;
    }
  }
  return -1;
}

module.exports.humanFileSize = function(bytes,decimals) {
  if(bytes == 0) return '0 Byte';
	var k = 1000; // or 1024 for binary
	var dm = decimals + 1 || 3;
	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	var i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.makeTwoDigit = function(n){
    return n > 9 ? "" + n: "0" + n;
}


exports.convertToIndexArray = function(hash_array) {
	var numeric_array = [];
	for ( var item in hash_array ){
	    numeric_array.push( hash_array[ item ] );
	}
	return numeric_array;
}


exports.getURLParameter = function(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}


exports.getFirstLetter = function(s) {
	return s.toUpperCase().charAt(0);
}


exports.formatebitrate = function(bits) {
  if (typeof bits !== 'number') {
    return '';
  }
  if (bits >= 1000000000) {
    return (bits / 1000000000).toFixed(2) + ' Gbit/s';
  }
  if (bits >= 1000000) {
    return (bits / 1000000).toFixed(2) + ' Mbit/s';
  }
  if (bits >= 1000) {
    return (bits / 1000).toFixed(2) + ' kbit/s';
  }
  return bits.toFixed(2) + ' bit/s';
}
