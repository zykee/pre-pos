'use strict';

function countSameElements(collection) {
  
  var collectionA = [
    {key: 'a',count: 0}, {key: 'e',count: 0}, {key: 'h',count: 0}, {key: 't',count: 0}, {key: 'f',count: 0}, {key: 'c',count: 0}, {key: 'g',count: 0}, {key: 'b',count: 0}, {key: 'd',count: 0}
  ];
  for(var i = 0; i<collection.length; i++)
  {
  	for(var j = 0; j<collectionA.length; j ++)
	{
		if(collection[i] == collectionA[j].key)
		{
			collectionA[j].count ++
			break
		}
	}
  }
  return collectionA;
}
