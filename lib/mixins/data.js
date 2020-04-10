module.exports = function() {
    return {
      id: makeId(),
      currentTarget:'', // used for infinite scroll
      lastRecord: 0, // used for infinite scroll
      allFilteredData:[],
      openChildRows:[],
      windowWidth:typeof window!=='undefined'?window.innerWidth:null,
      userMultiSorting:{},
      editing: []
    }
  }

function makeId()
{
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 5; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
