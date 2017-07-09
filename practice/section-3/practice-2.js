'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var num = 0
  for(var i = 0;i<objectB.value.length; i++)
  {
  	for(var j = 0; j<collectionA.length; j++)
	{
		if(collectionA[j].key == objectB.value[i])
		{
			num = parseInt(collectionA[j].count / 3)
			collectionA[j].count -= num
		}
	}	
  }
  return collectionA;
}
