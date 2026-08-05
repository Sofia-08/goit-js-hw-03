const list = document.querySelectorAll('.item');
console.log('Number of categories: ', list.length);
const list1 = document.querySelectorAll('ul li');
console.log(list1.length - list.length);
list.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
