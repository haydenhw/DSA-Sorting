const merge = (left, right, arr) => {
  let leftIndex = 0
  let rightIndex = 0
  let arrIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[arrIndex++] = left[leftIndex++]
    }
    else if (left[leftIndex] > right[rightIndex]) {
      arr[arrIndex++] = right[rightIndex++]
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    arr[arrIndex++] = left[i]
  }

  for (let i = rightIndex; i < right.length ; i++) {
    arr[arrIndex++] = right[i]
  }

  return arr
}

const mergeSort = (arr) => {
  //  return array if length <= 0
  if (arr.length <= 1) {
    return arr
  }
  const midpoint = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, midpoint)
  const rightArr = arr.slice(midpoint, arr.length)

  const left = mergeSort(leftArr)
  const right = mergeSort(rightArr)
  return merge(left, right, arr)
}

test('merge sort small', () => {
  const input = [7,4,2,9,6,1]
  expect(mergeSort(input)).toEqual(input.sort((a, b) => a - b))
})

test('merge sort large', () => {
  const input = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
  expect(mergeSort(input)).toEqual(input.sort((a, b) => a - b))
})
