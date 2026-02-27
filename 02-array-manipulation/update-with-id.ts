// If you have an array of objects and you need to update just one based on its ID, how do you do it immutably?

interface Item {
  id: string;
  data: string;
}

const updateItem = (items: Item[], id: string, newData: string) => {
  return items.map(item => 
    item.id === id 
      ? { ...item, data: newData } // The "New Version" of the item
      : item // The original reference
  );
};

const items: Item[] = [
  { id: '1', data: 'item 1' },
  { id: '2', data: 'item 2' },
  { id: '3', data: 'item 3' },
];

const updatedItems = updateItem(items, '2', 'updated item 2');

console.log(updatedItems);
console.log(items);

// this does not change the old array, it creates a new one with the updated item. The original array remains unchanged. map() creates a new array, and the spread operator creates a new object for the updated item, ensuring immutability.