import data from "./data.json";
const isInlocalStorage = JSON.parse(localStorage.getItem("data"));
if (isInlocalStorage) {
  let i = 0;
  const newData = data.map((element) => {
    if (element.name == isInlocalStorage[i].name) {
      const newEle = {
        ...element,
        isActive:isInlocalStorage[i].isActive
      }
      i++;
      return newEle
    }
    return {
      ...element,
    };
  });
  localStorage.setItem("data", JSON.stringify(newData));
} else {
  localStorage.setItem("data", JSON.stringify(data));
}
