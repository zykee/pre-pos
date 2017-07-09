'use strict';

function countSameElements(collection) {
  var j
  var collectionA = [
    {name: 'a',summary: 0}, {name: 'e',summary: 0}, {name: 'h',summary: 0}, {name: 't',summary: 0}, {name: 'f',summary: 0}, {name: 'c',summary: 0}, {name: 'g',summary: 0}, {name: 'b',summary: 0}, {name: 'd',summary: 0}
  ];
  for(var i = 0; i<collection.length; i++)
  {
  	for(j = 0; j<collectionA.length; j ++)
	{
		if(collection[i] == collectionA[j].name)
		{
			collectionA[j].summary ++
			break
		}
	}
	if(j==collectionA.length)
	{
		var char = collection[i].split("")
		if(char.length<5)
			for(var k = 0; k<collectionA.length; k ++)
			{
				if(char[0] == collectionA[k].name)
				{
					collectionA[k].summary += parseInt(char[2])
					break
				}
			}
		else
			for(var k = 0; k<collectionA.length; k ++)
			{
				if(char[0] == collectionA[k].name)
				{
					collectionA[k].summary += parseInt(char[2]+char[3])
					break
				}
			}
			
	}
  }


  return collectionA;
}
