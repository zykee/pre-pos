'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i = 0;i<objectB.value.length; i++)
  {
  	for(var j = 0; j<collectionA.length; j++)
	{
		if(collectionA[j].key == objectB.value[i])
			collectionA[j].count--
	}	
  }
  return collectionA;
}
