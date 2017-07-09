'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionC = new Array()
  var count = 0
  for( var i = 0; i < collectionA.length; i++)
	{
		for(var j = 0; j < objectB.value.length; j++)
		{
			if(collectionA[i] == objectB.value[j])
			{
				collectionC[count]= collectionA[i]
				count ++
				break
			}	
		} 
	}
  return collectionC;
}
