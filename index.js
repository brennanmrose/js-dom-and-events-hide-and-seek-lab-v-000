function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('#nested .target');
}

function deepestChild() {
	return document.querySelector('#grand-node div div div div')
}

// function increaseRankBy(n) {
//   const rankedLists = document.querySelectorAll( '.ranked-list' )
//   const firstList = rankedLists[0]
//   const secondList = rankedLists[1]

//   let children = firstList.children
//   let start = 1
//   ( let i = 0, l = children.length; i < l; i++  {
//     parseInt( children[ i ].innerHTML )
//   }

//   children = secondList.children
//   start = 12

//   ( let i = 0, l = children.length; i < l; i++  {
//      parseInt( children[ i ].innerHTML )
// }