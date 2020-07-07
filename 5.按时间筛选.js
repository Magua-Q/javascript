let arr = [
  { createtime: "2019-07-29", content: "哈哈哈" },
  { createtime: "2019-07-29", content: "哈哈111哈" },
  { createtime: "2019-07-30", content: "嘻嘻嘻" },
  { createtime: "2019-07-30", content: "嘻嘻嘻" },
];

function classification(arr) {
  let newArr = [];
  arr.forEach((item, i) => {
    let index = -1;
    let isExists = newArr.some((newItem, j) => {
      if (item.createtime == newItem.createtime) {
        index = j;
        return true;
      }
    });
    if (!isExists) {
      newArr.push({
        createtime: item.createtime,
        subList: [item],
      });
    } else {
      newArr[index].subList.push(item);
    }
  });
  return newArr;
}
