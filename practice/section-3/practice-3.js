'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var num = 0
  var collectionC = [
    {key: 'a',count: 0}, {key: 'e',count: 0}, {key: 'h',count: 0}, {key: 't',count: 0}, {key: 'f',count: 0}, {key: 'c',count: 0}, {key: 'g',count: 0}, {key: 'b',count: 0}, {key: 'd',count: 0}
  ];
  for(var i = 0; i<collectionA.length; i++)
  {
  	for(var j = 0; j<collectionC.length; j ++)
	{
		if(collectionA[i] == collectionC[j].key)
		{
			collectionC[j].count ++
			break
		}
	}
  }
  for(var i = 0;i<objectB.value.length; i++)
  {
  	for(var j = 0; j<collectionC.length; j++)
	{
		if(collectionC[j].key == objectB.value[i])
		{
			num = parseInt(collectionC[j].count / 3)
			collectionC[j].count -= num
		}
	}	
  }
  return collectionC;
}
